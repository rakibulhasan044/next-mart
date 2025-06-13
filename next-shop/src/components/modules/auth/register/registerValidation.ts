import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string({ required_error: "First name is required" })
    .min(2, "First name must be between 2 and 20 characters")
    .max(20, "First name must be between 2 and 20 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string({ required_error: "Confirm password is required" })
    .min(6, "Password must be at least 6 characters"),
});
