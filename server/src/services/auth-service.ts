import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"

import { GraphQL } from "@graphql/graphql"
import { AppContext } from "@server/types"
import { APP_SECRET } from "../utils"
import * as VibeService from "./vibe-service"

export async function signup(context: AppContext, args: GraphQL.SignupInput) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.user.create({
    data: { ...args, password },
  })

  VibeService.createDefaultVibes(context, { userId: user.id })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

export async function login(context: AppContext, args: GraphQL.LoginInput) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  })

  if (!user) {
    throw new Error("No such user found")
  }

  const valid = await bcrypt.compare(args.password, user.password)

  if (!valid) {
    throw new Error("Invalid password")
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}
