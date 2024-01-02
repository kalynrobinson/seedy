import gql from "graphql-tag"

export const vibeSchema = gql`
  type Vibe {
    id: ID!
    name: String!
    description: String
    asset: String!
    userId: ID!
  }

  enum SessionMethod {
    joint
    edible
  }

  ##################
  # Queries
  ##################

  type VibeListPayload {
    vibes: [Vibe!]
  }

  type Query {
    vibes: VibeListPayload!
  }

  ##################
  # Mutations
  ##################

  input CreateVibeInput {
    name: String!
    description: String
    asset: String!
  }

  input DeleteVibeInput {
    id: ID!
  }

  type VibePayload {
    vibe: Vibe!
  }

  type Mutation {
    createVibe(input: CreateVibeInput!): VibePayload! @auth(requires: USER)
    deleteVibe(input: DeleteVibeInput!): Boolean! @auth(requires: USER)
  }
`
