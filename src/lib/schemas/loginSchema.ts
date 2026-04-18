import { z } from "zod";

export const logincSchema = z.object({
    email: z.email("Invalid email address").nonempty("Email is required"),
    password: z.string().min(3, "Password must be at least 3 characters").nonempty("Password is required"),
});

export type LoginSchema = z.infer<typeof logincSchema>;