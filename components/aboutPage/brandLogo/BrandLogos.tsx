"use client";

import React from "react";
import BrandLogo from "./BrandLogo";
import ClientsSkeleton from "./ClientsSkeleton";
import { useQuery } from "@apollo/client/react";
import profileOperations from "@/lib/graphql/profile";
import { ClientData } from "@/types";

interface GetClients {
  clients: ClientData[];
}

export default function BrandLogos() {
  const { loading, error, data } = useQuery<GetClients>(
    profileOperations.Queries.getClients
  );

  if (error) return <ClientsSkeleton />;

  if (loading || data === undefined) return <ClientsSkeleton />;

  return (
    <ul className="logos grid grid-cols-4">
      {data.clients.map((c: ClientData, idx) => (
        <li key={c.id}>
          <BrandLogo client={c} border={idx !== data.clients.length - 1} />
        </li>
      ))}
    </ul>
  );
}
