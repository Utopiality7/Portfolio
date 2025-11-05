"use client";

import { useQuery } from "@apollo/client/react";
import MyService from "./MyService";
import { ServiceData } from "@/types";
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
    <ul className="services grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:left-1/2 before:hidden sm:before:block before:-translate-x-1/2">
      {data.services.map((s: ServiceData, idx) => (
        <MyService
          key={s.id}
          name={s.title}
          desc={s.description}
          Icon={s.icon}
          border={idx < data.services.length - 2}
          last={idx === data.services.length - 1}
        />
      ))}
    </ul>
  );
}
