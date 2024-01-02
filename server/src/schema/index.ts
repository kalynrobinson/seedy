import { sessionSchema, userSchema, authSchema, vibeSchema } from "./graphql"

export const schema = [userSchema, sessionSchema, vibeSchema, authSchema]
