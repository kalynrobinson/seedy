import { sessionResolver } from "./session-resolver"
import { userResolver } from "./user-resolver"
import { vibeResolver } from "./vibe-resolver"

export const resolvers = [sessionResolver, userResolver, vibeResolver]
