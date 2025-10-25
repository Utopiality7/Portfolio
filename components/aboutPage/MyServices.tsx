"use client";

import { useQuery } from "@apollo/client/react";
import MyService from "./MyService";
import { ServiceData } from "../../types";
import profileOperations from "@/lib/graphql/profile";
import ServicesSkeleton from "./ServicesSkeleton";

interface GetService {
  services: ServiceData[];
}

export default function MyServices() {
  const { loading, error, data } = useQuery<GetService>(
    profileOperations.Queries.getServices
  );

  if (error) {
    console.log(error);
    return <ServicesSkeleton />;
  }

  if (loading || data === undefined) return <ServicesSkeleton />;

  return (
    <ul className="services grid grid-cols-2">
      <li className="relative vCustomLine">
        {data.services
          .slice(0, Math.round(data.services.length / 2))
          .map((s: ServiceData, idx) => (
            <MyService
              key={s.id}
              name={s.title}
              desc={s.description}
              Icon={s.icon}
              border={idx !== Math.round(data.services.length / 2) - 1}
            />
          ))}
      </li>

      <li>
        {data.services
          .slice(Math.round(data.services.length / 2))
          .map((s: ServiceData, idx) => (
            <MyService
              key={s.id}
              name={s.title}
              desc={s.description}
              Icon={s.icon}
              border={
                Math.round(data.services.length / 2) + idx !==
                data.services.length - 1
              }
            />
          ))}
      </li>
    </ul>
  );
}
