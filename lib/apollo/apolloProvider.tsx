"use client";

import { ApolloProvider } from "@apollo/client/react";
import client from "./apolloClient";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
