"use client";

import { useQuery } from "@apollo/client/react";
import { FaReact } from "react-icons/fa";
import { SkillData } from "@/types";
import Coding from "./Coding";
import Development from "./Development";
import IconTitle from "../IconTitle";
import Knowledge from "./Knowledge";
import Languages from "./Languages";
import resumeOperations from "@/lib/graphql/resume";

interface SkillQuery {
  skills: SkillData[];
}

export default function Skills() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  );

  if (error) console.log(error);

  return (
    <>
      <ul className="grid grid-cols-2">
        <li className="py-6 px-12">
          <IconTitle title="coding" Icon={FaReact} />
          <Coding coding={data?.skills[0]?.coding} />
        </li>
        <li className="py-6 px-12 relative vCustomLine before:left-0">
          <IconTitle title="knowledge" Icon={FaReact} />
          <Knowledge knowledge={data?.skills[0]?.knowledge} />
        </li>
      </ul>

      <ul className="grid grid-cols-2">
        <li className="py-6 px-12">
          <IconTitle title="AI & Cloud" Icon={FaReact} />
          <Development development={data?.skills[0]?.development} />
        </li>
        <li className="py-6 px-12 relative vCustomLine before:left-0">
          <IconTitle title="languages" Icon={FaReact} />
          <Languages languages={data?.skills[0]?.languages} />
        </li>
      </ul>
    </>
  );
}
