import React from "react"
import {
  ApolloProvider as ApolloClientProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import Config from "app/config"

type ApolloProviderProps = Readonly<{
  children?: React.ReactNode
}>

const httpLink = createHttpLink({
  uri: Config.GRAPHQL_API_URL,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export function ApolloProvider({ children }: ApolloProviderProps) {
  return <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
}
