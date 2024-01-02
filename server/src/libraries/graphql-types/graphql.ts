import { GraphQLResolveInfo } from 'graphql';
import { AppContext } from '@server/types';
export namespace GraphQL {
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type CreateSessionInput = {
  amount: Scalars['String']['input'];
  method: SessionMethod;
  notes?: InputMaybe<Scalars['String']['input']>;
  potency: Scalars['String']['input'];
  relativeAmount?: InputMaybe<Scalars['String']['input']>;
  strain: Scalars['String']['input'];
  vibeIds: Array<Scalars['ID']['input']>;
};

export type CreateVibeInput = {
  asset: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type DeleteSessionInput = {
  id: Scalars['ID']['input'];
};

export type DeleteVibeInput = {
  id: Scalars['ID']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSession: SessionPayload;
  createVibe: VibePayload;
  deleteSession: Scalars['Boolean']['output'];
  deleteVibe: Scalars['Boolean']['output'];
  login?: Maybe<AuthPayload>;
  signup?: Maybe<AuthPayload>;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateVibeArgs = {
  input: CreateVibeInput;
};


export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteVibeArgs = {
  input: DeleteVibeInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  sessions: SessionListPayload;
  vibes: VibeListPayload;
};

export enum RelativeAmount {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Session = {
  __typename?: 'Session';
  amount: Scalars['String']['output'];
  amount_relative?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  potency: Scalars['String']['output'];
  strain: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  vibeIds: Array<Scalars['ID']['output']>;
  vibes?: Maybe<Array<Vibe>>;
};

export type SessionListPayload = {
  __typename?: 'SessionListPayload';
  sessions?: Maybe<Array<Session>>;
};

export enum SessionMethod {
  Edible = 'edible',
  Joint = 'joint'
}

export type SessionPayload = {
  __typename?: 'SessionPayload';
  session: Session;
};

export type SessionVibe = {
  __typename?: 'SessionVibe';
  id: Scalars['ID']['output'];
  session: Session;
  sessionId: Scalars['ID']['output'];
  vibe: Vibe;
  vibeId: Scalars['ID']['output'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Vibe = {
  __typename?: 'Vibe';
  asset: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type VibeListPayload = {
  __typename?: 'VibeListPayload';
  vibes?: Maybe<Array<Vibe>>;
};

export type VibePayload = {
  __typename?: 'VibePayload';
  vibe: Vibe;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateSessionInput: CreateSessionInput;
  CreateVibeInput: CreateVibeInput;
  DeleteSessionInput: DeleteSessionInput;
  DeleteVibeInput: DeleteVibeInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RelativeAmount: RelativeAmount;
  Role: Role;
  Session: ResolverTypeWrapper<Session>;
  SessionListPayload: ResolverTypeWrapper<SessionListPayload>;
  SessionMethod: SessionMethod;
  SessionPayload: ResolverTypeWrapper<SessionPayload>;
  SessionVibe: ResolverTypeWrapper<SessionVibe>;
  SignupInput: SignupInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  Vibe: ResolverTypeWrapper<Vibe>;
  VibeListPayload: ResolverTypeWrapper<VibeListPayload>;
  VibePayload: ResolverTypeWrapper<VibePayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  CreateSessionInput: CreateSessionInput;
  CreateVibeInput: CreateVibeInput;
  DeleteSessionInput: DeleteSessionInput;
  DeleteVibeInput: DeleteVibeInput;
  ID: Scalars['ID']['output'];
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  Session: Session;
  SessionListPayload: SessionListPayload;
  SessionPayload: SessionPayload;
  SessionVibe: SessionVibe;
  SignupInput: SignupInput;
  String: Scalars['String']['output'];
  User: User;
  Vibe: Vibe;
  VibeListPayload: VibeListPayload;
  VibePayload: VibePayload;
};

export type AuthDirectiveArgs = {
  requires?: Maybe<Role>;
};

export type AuthDirectiveResolver<Result, Parent, ContextType = AppContext, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createSession?: Resolver<ResolversTypes['SessionPayload'], ParentType, ContextType, RequireFields<MutationCreateSessionArgs, 'input'>>;
  createVibe?: Resolver<ResolversTypes['VibePayload'], ParentType, ContextType, RequireFields<MutationCreateVibeArgs, 'input'>>;
  deleteSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSessionArgs, 'input'>>;
  deleteVibe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteVibeArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  signup?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'input'>>;
};

export type QueryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  sessions?: Resolver<ResolversTypes['SessionListPayload'], ParentType, ContextType>;
  vibes?: Resolver<ResolversTypes['VibeListPayload'], ParentType, ContextType>;
};

export type SessionResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount_relative?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  potency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vibeIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  vibes?: Resolver<Maybe<Array<ResolversTypes['Vibe']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionListPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['SessionListPayload'] = ResolversParentTypes['SessionListPayload']> = {
  sessions?: Resolver<Maybe<Array<ResolversTypes['Session']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['SessionPayload'] = ResolversParentTypes['SessionPayload']> = {
  session?: Resolver<ResolversTypes['Session'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SessionVibeResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['SessionVibe'] = ResolversParentTypes['SessionVibe']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  session?: Resolver<ResolversTypes['Session'], ParentType, ContextType>;
  sessionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vibe?: Resolver<ResolversTypes['Vibe'], ParentType, ContextType>;
  vibeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VibeResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Vibe'] = ResolversParentTypes['Vibe']> = {
  asset?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VibeListPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['VibeListPayload'] = ResolversParentTypes['VibeListPayload']> = {
  vibes?: Resolver<Maybe<Array<ResolversTypes['Vibe']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VibePayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['VibePayload'] = ResolversParentTypes['VibePayload']> = {
  vibe?: Resolver<ResolversTypes['Vibe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = AppContext> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SessionListPayload?: SessionListPayloadResolvers<ContextType>;
  SessionPayload?: SessionPayloadResolvers<ContextType>;
  SessionVibe?: SessionVibeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vibe?: VibeResolvers<ContextType>;
  VibeListPayload?: VibeListPayloadResolvers<ContextType>;
  VibePayload?: VibePayloadResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = AppContext> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};

}