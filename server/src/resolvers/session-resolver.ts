import { GraphQL } from "@graphql/graphql"
import { SessionService } from "../services"

const Query: GraphQL.QueryResolvers = {
  async sessions(_parent, _args, context, _info) {
    const sessions = await SessionService.getSessions(context)

    return { sessions }
  },
}

const Mutation: GraphQL.MutationResolvers = {
  async createSession(_parent, args, context, _info) {
    const newSession = await SessionService.createSession(context, args.input)

    return { session: newSession }
  },

  async deleteSession(_parent, args, context, _info) {
    const isDeleted = await SessionService.deleteSession(context, args.input)

    return isDeleted
  },
}

export const sessionResolver = {
  Query,
  Mutation,
}
