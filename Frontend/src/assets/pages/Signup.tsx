"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(8, "Phone is required"),
    password: z.string().min(6, "Password too short"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
    role: z.enum(["client", "provider"], {
      required_error: "Please choose a role",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export default function SignupForm() {
  const [selectedRole, setSelectedRole] = useState<"client" | "provider" | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: undefined,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", values)
    // Submit to your backend API here
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-4xl font-bold text-white">Sign Up</h1>
        <p className="text-muted-foreground text-sm">
          Create an account by filling out the form below.
        </p>

        <div className="flex gap-4 mb-4">
          <Button
            variant={selectedRole === "client" ? "default" : "outline"}
            className="xx-full"
            onClick={() => {
              form.setValue("role", "client")
              setSelectedRole("client")
            }}
            type="button"
          >
            Client
          </Button>
          <Button
            variant={selectedRole === "provider" ? "default" : "outline"}
            className="x-full"
            onClick={() => {
              form.setValue("role", "provider")
              setSelectedRole("provider")
            }}
            type="button"
          >
            Provider
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+212..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>

        <p className="text-center text-muted-foreground text-sm">
          Already have an account?{" "}
          <a href="/login" className="underline font-semibold text-white">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
