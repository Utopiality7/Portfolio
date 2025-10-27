"use client";

import { useQuery } from "@apollo/client/react";
import MyInfo from "../../MyInfo";
import profileOperations from "@/lib/graphql/profile";
import AboutMeSkeleton from "./AboutMeSkeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface GetUserBio {
  profiles: [{ bio: string }];
}

export default function AboutMe() {
  const { loading, error, data } = useQuery<GetUserBio>(
    profileOperations.Queries.getBio
  );

  if (error) {
    console.log(error);
    return <AboutMeSkeleton />;
  }

  if (loading || data === undefined) return <AboutMeSkeleton />;

  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        <ReactMarkdown
          children={data.profiles[0].bio}
          remarkPlugins={[remarkGfm]}
        />
      </article>

      <ul className="location grid grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="age" value={String(new Date().getFullYear() - 1995)} />
        <MyInfo field="residence" value="Canada" />
        <MyInfo field="status" value="Available" />
        <MyInfo field="address" value="Toronto, Canada" />
      </ul>
    </div>
  );
}
