import React, { createContext, useMemo } from "react"

import { Exact, GetSessionsQuery, SessionFragment, useGetSessionsQuery } from "app/graphql"
import { ApolloQueryResult } from "@apollo/client"

interface SessionsContextType {
  sessions: SessionFragment[]
  refetch: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetSessionsQuery>>
  isLoading: boolean
}

const sessionsContext = createContext<SessionsContextType>({
  sessions: [],
  refetch: () => Promise.resolve({} as ApolloQueryResult<GetSessionsQuery>),
  isLoading: false,
})

export function useSessionsContext(): SessionsContextType {
  return React.useContext(sessionsContext)
}

interface ProviderProps {
  children?: React.ReactElement
}

export const SessionsProvider: React.FC<ProviderProps> = ({ children }) => {
  const { data, loading, refetch } = useGetSessionsQuery()

  const values = useMemo(() => {
    const sessions = data?.sessions?.sessions ?? []
    const normalizedSessions = sessions.reduce((acc, session) => {
      acc[session.id] = session
      return acc
    }, {} as Record<string, SessionFragment>)

    return {
      sessions,
      sessionsById: normalizedSessions,
      isLoading: loading,
      refetch,
    }
  }, [data?.sessions?.sessions])

  return <sessionsContext.Provider value={values}>{children}</sessionsContext.Provider>
}
