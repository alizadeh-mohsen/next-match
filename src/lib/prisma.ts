import { PrismaClient } from "../generated/prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import { PrismaPg } from "@prisma/adapter-pg"


const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prismaClient = new PrismaClient({ adapter })


export const prisma =
    globalForPrisma.prisma || prismaClient.$extends(withAccelerate())

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma