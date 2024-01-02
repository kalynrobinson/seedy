import { GraphQL } from "@graphql/graphql"
import { Vibe } from "@prisma/client"
import { AppContext } from "@server/types"
import { DEFAULT_VIBES } from "./fixtures"

export async function getVibes(context: AppContext) {
  const vibes: Vibe[] = await context.prisma.vibe.findMany({
    where: {
      userId: context.userId,
    },
  })

  return vibes
}

export async function createVibe(context: AppContext, args: GraphQL.CreateVibeInput) {
  const { userId } = context

  const newVibe = await context.prisma.vibe.create({
    data: {
      name: args.name,
      description: args.description,
      asset: args.asset,
      userId: userId ?? undefined,
    },
  })

  return newVibe
}

export async function createDefaultVibes(context: AppContext, args: { userId: string }) {
  const newVibes = []

  for (const vibe of DEFAULT_VIBES) {
    const newVibe = await context.prisma.vibe.create({
      data: {
        name: vibe.name,
        description: vibe.description,
        asset: vibe.asset,
        userId: args.userId,
      },
    })
    newVibes.push(newVibe)
  }

  return newVibes
}
