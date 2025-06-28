import Request from "../models/Request.js";
import User from "../models/User.js";

export const getDashboardStats = async (req, res) => {
  try {
    const clients = await User.countDocuments({ role: "client" });
    const providers = await User.countDocuments({ role: "provider" });
    const totalRequests = await Request.countDocuments();

    const monthly = await Request.aggregate([
      { $group: { _id: { $month: "$createdAt" }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    const monthlyRequests = Array.from({ length: 12 }, (_, i) => {
      const found = monthly.find((m) => m._id === i + 1);
      return {
        month: new Date(0, i).toLocaleString("default", { month: "short" }),
        count: found ? found.count : 0,
      };
    });

    const topProviders = await Request.aggregate([
      { $match: { rating: { $exists: true } } },
      {
        $group: {
          _id: "$provider",
          avgRating: { $avg: "$rating" },
          count: { $sum: 1 },
        },
      },
      { $sort: { avgRating: -1, count: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "provider",
        },
      },
      { $unwind: "$provider" },
      {
        $project: {
          _id: 0,
          providerId: "$provider._id",
          name: "$provider.name",
          avgRating: 1,
          requests: "$count",
        },
      },
    ]);

    res.json({ clients, providers, totalRequests, monthlyRequests, topProviders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};
