"use client";

import Price from "./Price";
import { useQuery } from "@apollo/client/react";
import profileOperations from "@/lib/graphql/profile";
import { PriceData } from "../../types";
import { DiCodeigniter } from "react-icons/di";
import { GiCondorEmblem } from "react-icons/gi";
import PricesSkeleton from "./PricesSkeleton";

interface GetPricesData {
  prices: PriceData[];
}

export default function Prices() {
  const { data, loading, error } = useQuery<GetPricesData>(
    profileOperations.Queries.getPrices
  );

  if (error) return <PricesSkeleton />;

  if (loading || data === undefined) return <PricesSkeleton />;

  return (
    <ul className="prices grid grid-cols-2">
      <li className="relative vCustomLine">
        <Price Icon={DiCodeigniter} price={data.prices[0]} />
      </li>
      <li>
        <Price Icon={GiCondorEmblem} price={data.prices[1]} />
      </li>
    </ul>
  );
}
