"use client";

import IconTitle from "../IconTitle";
import ResumeItem from "./ResumeItem";
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import ResumeSkeleton from "./ResumeSkeleton";
import resumeOperations from "@/lib/graphql/resume";
import { ExperienceData } from "@/types";
import { useQuery } from "@apollo/client/react";

interface ExperienceQuery {
  resumes: ExperienceData[];
}

export default function MyResume() {
  const { data, loading, error } = useQuery<ExperienceQuery>(
    resumeOperations.Queries.getExperience
  );

  return (
    <ul className="grid grid-cols-2">
      <li className="relative vCustomLine py-6 px-12">
        <IconTitle title="experience" Icon={FaNetworkWired} />

        {(error || loading || !data || !data.resumes.length) && (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        )}

        {data &&
          data.resumes.map((r: ExperienceData) => {
            if (!r.isExperience) return null;
            return <ResumeItem key={r.id} resume={r} border />;
          })}
      </li>

      <li className="py-6 px-12">
        <IconTitle title="education" Icon={FaGraduationCap} />

        {(error || loading || !data || !data.resumes.length) && (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        )}

        {data &&
          data.resumes.map((r: ExperienceData) => {
            if (r.isExperience) return null;
            return <ResumeItem key={r.id} resume={r} border />;
          })}
      </li>
    </ul>
  );
}
