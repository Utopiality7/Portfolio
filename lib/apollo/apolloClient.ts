import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { makeVar } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
});

const authLink = new SetContextLink((prevContext) => {
  const token = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
        },
      },
    },
  }),
});

export const currentWorkTab = makeVar("All");

export default client;
