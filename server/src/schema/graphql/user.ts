import gql from "graphql-tag"

export const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input SignupInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String
    user: User!
  }

  type Mutation {
    signup(input: SignupInput!): AuthPayload
    login(input: LoginInput!): AuthPayload
  }
`
