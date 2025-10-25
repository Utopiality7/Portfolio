"use client";

import { useQuery } from "@apollo/client/react";
import MyInfo from "../MyInfo";
import profileOperations from "@/lib/graphql/profile";
import AboutMeSkeleton from "./AboutMeSkeleton";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
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
      <article className="markdown-body bg-gray-900 text-gray-400 [&>h4]:m-0 [&>h4]:mb-2.5 [&>h4]:text-[1.6rem] [&>p]:text-2xl [&>p]:leading-[1.65] [&>blockquote]:bg-gray-800 [&>table>thead>tr]:bg-gray-800 [&>table>tbody>tr]:bg-gray-700">
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
