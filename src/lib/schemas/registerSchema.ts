import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
    email: z.email("Invalid email address").nonempty("Email is required"),
    password: z.string().min(3, "Password must be at least 3 characters").nonempty("Password is required"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;