import { GraphQL } from "@graphql/graphql"
import { AuthService } from "../services"

const Mutation: GraphQL.MutationResolvers = {
  async signup(_parent, args, context, _info) {
    const { input } = args
    const { token, user } = await AuthService.signup(context, input)

    return {
      token,
      user,
    }
  },

  async login(_parent, args, context, _info) {
    const { input } = args
    const { token, user } = await AuthService.login(context, input)

    return {
      token,
      user,
    }
  },
}

export const userResolver = {
  Mutation,
}
