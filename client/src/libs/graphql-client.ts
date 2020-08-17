/**
 * Provides a GraphQL Client
 */

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const DEV_ENDPOINT = 'http://localhost:4000';

const cache = new InMemoryCache({
    typePolicies: {
        // TODO: add local state control.
    },
});

export const graphqlClient = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: process.env.REACT_APP_API_URI ?? DEV_ENDPOINT
    }),
})
