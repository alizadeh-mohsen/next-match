import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { PrismaClient } from "./generated/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const { handlers: { GET, POST }, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
})