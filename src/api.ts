import { GraphQLClient } from 'graphql-request';
import { QueryClient } from 'react-query';
import { getSdk } from './generated/graphql';

const graphqlSchema = 'http://localhost:4000/graphql';

const gqlClient = new GraphQLClient(graphqlSchema);
export const { findAll, getInvestment } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
