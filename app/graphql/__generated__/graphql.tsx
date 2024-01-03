import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type AuthPayload = {
  __typename?: "AuthPayload"
  token: Maybe<Scalars["String"]["output"]>
  user: User
}

export type CreateSessionInput = {
  amount: Scalars["String"]["input"]
  method: SessionMethod
  notes?: InputMaybe<Scalars["String"]["input"]>
  potency: Scalars["String"]["input"]
  relativeAmount?: InputMaybe<Scalars["String"]["input"]>
  strain: Scalars["String"]["input"]
  vibeIds: Array<Scalars["ID"]["input"]>
}

export type CreateVibeInput = {
  asset: Scalars["String"]["input"]
  description?: InputMaybe<Scalars["String"]["input"]>
  name: Scalars["String"]["input"]
}

export type DeleteSessionInput = {
  id: Scalars["ID"]["input"]
}

export type DeleteVibeInput = {
  id: Scalars["ID"]["input"]
}

export type LoginInput = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

export type Mutation = {
  __typename?: "Mutation"
  createSession: SessionPayload
  createVibe: VibePayload
  deleteSession: Scalars["Boolean"]["output"]
  deleteVibe: Scalars["Boolean"]["output"]
  login: Maybe<AuthPayload>
  signup: Maybe<AuthPayload>
}

export type MutationCreateSessionArgs = {
  input: CreateSessionInput
}

export type MutationCreateVibeArgs = {
  input: CreateVibeInput
}

export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput
}

export type MutationDeleteVibeArgs = {
  input: DeleteVibeInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationSignupArgs = {
  input: SignupInput
}

export type Query = {
  __typename?: "Query"
  sessions: SessionListPayload
  vibes: VibeListPayload
}

export enum RelativeAmount {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export enum Role {
  Admin = "ADMIN",
  User = "USER",
}

export type Session = {
  __typename?: "Session"
  amount: Scalars["String"]["output"]
  amount_relative: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  method: Scalars["String"]["output"]
  notes: Maybe<Scalars["String"]["output"]>
  potency: Scalars["String"]["output"]
  strain: Scalars["String"]["output"]
  user: Maybe<User>
  userId: Scalars["ID"]["output"]
  vibeIds: Array<Scalars["ID"]["output"]>
  vibes: Maybe<Array<Vibe>>
}

export type SessionListPayload = {
  __typename?: "SessionListPayload"
  sessions: Maybe<Array<Session>>
}

export enum SessionMethod {
  Edible = "edible",
  Joint = "joint",
}

export type SessionPayload = {
  __typename?: "SessionPayload"
  session: Session
}

export type SessionVibe = {
  __typename?: "SessionVibe"
  id: Scalars["ID"]["output"]
  session: Session
  sessionId: Scalars["ID"]["output"]
  vibe: Vibe
  vibeId: Scalars["ID"]["output"]
}

export type SignupInput = {
  email: Scalars["String"]["input"]
  name: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

export type User = {
  __typename?: "User"
  email: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
}

export type Vibe = {
  __typename?: "Vibe"
  asset: Scalars["String"]["output"]
  description: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  userId: Scalars["ID"]["output"]
}

export type VibeListPayload = {
  __typename?: "VibeListPayload"
  vibes: Maybe<Array<Vibe>>
}

export type VibePayload = {
  __typename?: "VibePayload"
  vibe: Vibe
}

export type SignupMutationVariables = Exact<{
  input: SignupInput
}>

export type SignupMutation = {
  __typename?: "Mutation"
  signup: {
    __typename?: "AuthPayload"
    token: string | null
    user: { __typename?: "User"; id: string; name: string; email: string }
  } | null
}

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = {
  __typename?: "Mutation"
  login: {
    __typename?: "AuthPayload"
    token: string | null
    user: { __typename?: "User"; id: string; name: string; email: string }
  } | null
}

export type SessionFragment = {
  __typename?: "Session"
  id: string
  method: string
  notes: string | null
  amount: string
  potency: string
  strain: string
  vibes: Array<{
    __typename?: "Vibe"
    id: string
    name: string
    description: string | null
    asset: string
  }> | null
}

export type GetSessionsQueryVariables = Exact<{ [key: string]: never }>

export type GetSessionsQuery = {
  __typename?: "Query"
  sessions: {
    __typename?: "SessionListPayload"
    sessions: Array<{
      __typename?: "Session"
      id: string
      method: string
      notes: string | null
      amount: string
      potency: string
      strain: string
      vibes: Array<{
        __typename?: "Vibe"
        id: string
        name: string
        description: string | null
        asset: string
      }> | null
    }> | null
  }
}

export type CreateSessionMutationVariables = Exact<{
  input: CreateSessionInput
}>

export type CreateSessionMutation = {
  __typename?: "Mutation"
  createSession: {
    __typename?: "SessionPayload"
    session: {
      __typename?: "Session"
      id: string
      method: string
      notes: string | null
      amount: string
      potency: string
      strain: string
      vibes: Array<{
        __typename?: "Vibe"
        id: string
        name: string
        description: string | null
        asset: string
      }> | null
    }
  }
}

export type DeleteSessionMutationVariables = Exact<{
  input: DeleteSessionInput
}>

export type DeleteSessionMutation = { __typename?: "Mutation"; deleteSession: boolean }

export const SessionFragmentDoc = gql`
  fragment Session on Session {
    id
    method
    notes
    amount
    potency
    strain
    vibes {
      id
      name
      description
      asset
    }
  }
`
export const SignupDocument = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options)
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>
export const LoginDocument = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const GetSessionsDocument = gql`
  query getSessions {
    sessions {
      sessions {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`

/**
 * __useGetSessionsQuery__
 *
 * To run a query within a React component, call `useGetSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSessionsQuery, GetSessionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSessionsQuery, GetSessionsQueryVariables>(GetSessionsDocument, options)
}
export function useGetSessionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSessionsQuery, GetSessionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSessionsQuery, GetSessionsQueryVariables>(
    GetSessionsDocument,
    options,
  )
}
export function useGetSessionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetSessionsQuery, GetSessionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetSessionsQuery, GetSessionsQueryVariables>(
    GetSessionsDocument,
    options,
  )
}
export type GetSessionsQueryHookResult = ReturnType<typeof useGetSessionsQuery>
export type GetSessionsLazyQueryHookResult = ReturnType<typeof useGetSessionsLazyQuery>
export type GetSessionsSuspenseQueryHookResult = ReturnType<typeof useGetSessionsSuspenseQuery>
export type GetSessionsQueryResult = Apollo.QueryResult<GetSessionsQuery, GetSessionsQueryVariables>
export function refetchGetSessionsQuery(variables?: GetSessionsQueryVariables) {
  return { query: GetSessionsDocument, variables: variables }
}
export const CreateSessionDocument = gql`
  mutation createSession($input: CreateSessionInput!) {
    createSession(input: $input) {
      session {
        ...Session
      }
    }
  }
  ${SessionFragmentDoc}
`
export type CreateSessionMutationFn = Apollo.MutationFunction<
  CreateSessionMutation,
  CreateSessionMutationVariables
>

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(
    CreateSessionDocument,
    options,
  )
}
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<
  CreateSessionMutation,
  CreateSessionMutationVariables
>
export const DeleteSessionDocument = gql`
  mutation deleteSession($input: DeleteSessionInput!) {
    deleteSession(input: $input)
  }
`
export type DeleteSessionMutationFn = Apollo.MutationFunction<
  DeleteSessionMutation,
  DeleteSessionMutationVariables
>

/**
 * __useDeleteSessionMutation__
 *
 * To run a mutation, you first call `useDeleteSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSessionMutation, { data, loading, error }] = useDeleteSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteSessionMutation, DeleteSessionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteSessionMutation, DeleteSessionMutationVariables>(
    DeleteSessionDocument,
    options,
  )
}
export type DeleteSessionMutationHookResult = ReturnType<typeof useDeleteSessionMutation>
export type DeleteSessionMutationResult = Apollo.MutationResult<DeleteSessionMutation>
export type DeleteSessionMutationOptions = Apollo.BaseMutationOptions<
  DeleteSessionMutation,
  DeleteSessionMutationVariables
>
