import { Session, SessionVibe, Vibe } from "@prisma/client"
import { GraphQL } from "@graphql/graphql"
import { AppContext } from "@server/types"

type SessionWithVibes = Session & {
  SessionVibe: (SessionVibe & {
    vibe: Vibe
  })[]
}

const includeVibes = {
  SessionVibe: {
    include: {
      vibe: true,
    },
  },
}

export async function getSessionById(context: AppContext, args: { id: string }) {
  const session = await context.prisma.session.findUnique({
    include: includeVibes,
    where: {
      id: args.id,
    },
  })

  if (!session) {
    throw Error("Session not found")
  }

  return convertPrismaSessionToGraphQLSession(session)
}

export async function getSessions(context: AppContext) {
  const sessions = await context.prisma.session.findMany({
    include: includeVibes,
    where: {
      userId: context.userId,
    },
  })

  return sessions.map(convertPrismaSessionToGraphQLSession)
}

export async function createSession(context: AppContext, args: GraphQL.CreateSessionInput) {
  const { userId } = context
  const newSession = await context.prisma.session.create({
    include: includeVibes,
    data: {
      method: args.method,
      notes: args.notes,
      userId,
      amount: args.amount,
      relativeAmount: args.relativeAmount ?? "",
      potency: args.potency,
      strain: args.strain,
      SessionVibe: {
        create: args.vibeIds.map((vibeId) => ({ vibeId })),
      },
    },
  })

  return convertPrismaSessionToGraphQLSession(newSession)
}

export async function deleteSession(context: AppContext, args: GraphQL.DeleteSessionInput) {
  const { userId } = context

  const session = await getSessionById(context, { id: args.id })

  if (session?.userId !== userId) {
    throw Error("Unauthorized")
  }

  await context.prisma.session.delete({
    where: {
      id: args.id,
    },
  })

  return true
}

function convertPrismaSessionToGraphQLSession(prismaSession: SessionWithVibes) {
  return {
    ...prismaSession,
    id: prismaSession.id.toString(),
    userId: prismaSession.userId.toString(),
    vibeIds: prismaSession.SessionVibe.map((sessionVibe) => sessionVibe.vibeId.toString()),
    vibes: prismaSession.SessionVibe.map((sessionVibe) => sessionVibe.vibe),
    amount: prismaSession.amount,
  }
}
