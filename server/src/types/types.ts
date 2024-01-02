import type { PrismaClient } from "@prisma/client"

export declare interface AppContext {
  // userService: UserService
  // sessionService: SessionService
  prisma: PrismaClient
  userId: string
}
