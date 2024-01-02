import { GraphQL } from "@graphql/graphql"
import { VibeService } from "../services"

const Query: GraphQL.QueryResolvers = {
  async vibes(_parent, _args, context, _info) {
    const vibes = await VibeService.getVibes(context)

    return { vibes }
  },
}

const Mutation: GraphQL.MutationResolvers = {
  async createVibe(_parent, args, context, _info) {
    const newVibe = await VibeService.createVibe(context, args.input)

    return { vibe: newVibe }
  },
}

export const vibeResolver = {
  Query,
  Mutation,
}
