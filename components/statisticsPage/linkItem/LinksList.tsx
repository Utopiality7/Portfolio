"use client";

import { useQuery } from "@apollo/client/react";
import profileOperations from "@/lib/graphql/profile";
import LinkItem from "./LinkItem";
import LinksListSkeleton from "./LinksListSkeleton";
import { SocialMediaData } from "@/types";

interface getSocialMedias {
  profiles: [{ socialMedia: SocialMediaData[] }];
}

export default function LinksList() {
  const { data, loading, error } = useQuery<getSocialMedias>(
    profileOperations.Queries.getSocialMedias
  );

  if (error) return <LinksListSkeleton />;

  if (loading || data === undefined) {
    return <LinksListSkeleton />;
  }

  return (
    <ul className="px-12 py-8 mb-8 space-y-6">
      {data?.profiles[0].socialMedia.map((sm) => (
        <LinkItem key={sm.id} socialMedia={sm} />
      ))}
    </ul>
  );
}
