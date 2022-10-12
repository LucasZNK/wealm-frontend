import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateInvestmentInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Investment = {
  __typename?: 'Investment';
  _id: Scalars['ID'];
  description: Scalars['String'];
  title: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: UserSecured;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createInvestment: Investment;
  logout: User;
  refreshTokens: User;
  registerUser: User;
  signUpLocal: User;
  signinpLocal: LoginResponse;
};


export type MutationCreateInvestmentArgs = {
  input: CreateInvestmentInput;
};


export type MutationLogoutArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRefreshTokensArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  input: CreateUserInput;
};


export type MutationSignUpLocalArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSigninpLocalArgs = {
  loginUserInput: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  findAll: Array<User>;
  getInvestment: Array<Investment>;
  getUserInfo: Array<User>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserSecured = {
  __typename?: 'UserSecured';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type FindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuery = { __typename?: 'Query', findAll: Array<{ __typename?: 'User', username: string }> };

export type GetInvestmentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInvestmentQuery = { __typename?: 'Query', getInvestment: Array<{ __typename?: 'Investment', title: string, description: string, _id: string }> };


export const FindAllDocument = gql`
    query findAll {
  findAll {
    username
  }
}
    `;
export const GetInvestmentDocument = gql`
    query getInvestment {
  getInvestment {
    title
    description
    _id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findAll(variables?: FindAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllQuery>(FindAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAll', 'query');
    },
    getInvestment(variables?: GetInvestmentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInvestmentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInvestmentQuery>(GetInvestmentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getInvestment', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;