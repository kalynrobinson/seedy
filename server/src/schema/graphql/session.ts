import gql from "graphql-tag"

export const sessionSchema = gql`
  type Session {
    id: ID!
    method: String!
    notes: String
    amount: String!
    amount_relative: String
    potency: String!
    strain: String!

    userId: ID!
    user: User
    vibes: [Vibe!]
    vibeIds: [ID!]!
  }

  enum SessionMethod {
    joint
    edible
  }

  enum RelativeAmount {
    low
    medium
    high
  }

  type SessionVibe {
    id: ID!
    session: Session!
    sessionId: ID!
    vibe: Vibe!
    vibeId: ID!
  }

  ##################
  # Queries
  ##################

  type SessionListPayload {
    sessions: [Session!]
  }

  type Query {
    sessions: SessionListPayload! @auth(requires: USER)
  }

  ##################
  # Queries
  ##################

  input CreateSessionInput {
    method: SessionMethod!
    notes: String
    amount: String!
    relativeAmount: String
    potency: String!
    strain: String!
    vibeIds: [ID!]!
  }

  input DeleteSessionInput {
    id: ID!
  }

  type SessionPayload {
    session: Session!
  }

  type Mutation {
    createSession(input: CreateSessionInput!): SessionPayload! @auth(requires: USER)
    deleteSession(input: DeleteSessionInput!): Boolean! @auth(requires: USER)
  }
`
