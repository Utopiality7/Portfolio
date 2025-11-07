"use client";

import Fact from "./Fact";
import FactsSkeleton from "./FactsSkeleton";
import { useQuery } from "@apollo/client/react";
import { FactData } from "@/types";
import profileOperations from "@/lib/graphql/profile";

interface GetFacts {
  facts: FactData[];
}

export default function Facts() {
  const { loading, error, data } = useQuery<GetFacts>(
    profileOperations.Queries.getFacts
  );

  if (error) return <FactsSkeleton />;

  if (loading || data === undefined) return <FactsSkeleton />;

  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-4">
      {data.facts.map((fact: FactData, idx) => (
        <Fact
          key={fact.id}
          fact={fact}
          border={idx !== data.facts.length - 1}
          pos={idx}
        />
      ))}
    </ul>
  );
}
