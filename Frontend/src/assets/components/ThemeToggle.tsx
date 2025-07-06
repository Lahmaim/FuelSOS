import { useTheme } from "../context/theme-context.tsx";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-white hidden md:inline">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 text-gray-800" />
          <span className="text-sm text-black hidden md:inline">Dark Mode</span>
        </>
      )}
    </button>
  );
}
