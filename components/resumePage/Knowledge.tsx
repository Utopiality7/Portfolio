import { BsCheckLg } from "react-icons/bs";
import KnowledgeSkeleton from "./KnowledgeSkeleton";

export default function Knowledge() {
  return (
    <div className="py-11">
      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">Machine Learning & AI</span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">
          Microservices Architecture
        </span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">Mobile App Development</span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">Cloud Native Development</span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">CI/CD & DevOps Practices</span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">RESTful & GraphQL APIs</span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center mb-6">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">
          Database Design & Optimization
        </span>
      </div>
      {/* <KnowledgeSkeleton /> */}

      <div className="flex gap-6 items-center">
        <BsCheckLg className="text-main-orange text-2xl" />
        <span className="text-gray-300 text-2xl">
          System Design & Scalability
        </span>
      </div>
      {/* <KnowledgeSkeleton /> */}
    </div>
  );
}
