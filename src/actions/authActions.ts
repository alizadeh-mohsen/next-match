'use server';

import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { ActionResult } from "@/lib/types";
import bcrypt from "bcryptjs";
import type { UserModel } from "@/generated/prisma/models";


export async function registerUser(data: RegisterSchema): Promise<ActionResult<UserModel>> {
    try {
        const validatedData = registerSchema.parse(data);

        if (!validatedData) {
            return {
                status: 'error',
                error: 'Invalid data'
            };
        }
        const { name, email, password } = validatedData;

        const existingUser = await prisma.user.findUnique({
            where: {
                email: validatedData.email
            }
        });

        if (existingUser) {
            return {
                status: 'error',
                error: 'User already exists'
            };
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

return {
            status: 'success',
            data: user
        };


    } catch (error) {
        console.error('Error registering user:', error);
        return {
            status: 'error',
            error: 'An error occurred while registering the user'
        };
    }
}