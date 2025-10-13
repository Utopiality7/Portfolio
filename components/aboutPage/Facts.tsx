import { FaReact } from "react-icons/fa";
import Fact from "./Fact";
import FactSkeleton from "./FactSkeleton";

export default function Facts() {
  return (
    <ul className="logos grid grid-cols-4 mb-12">
      <li>
        {/* <Fact Icon={FaReact} desc="500+ Movies Watched" border /> */}
        <FactSkeleton border />
      </li>
      <li>
        {/* <Fact Icon={FaReact} desc="30+ New Recipes Tried" border /> */}
        <FactSkeleton border />
      </li>
      <li>
        {/* <Fact Icon={FaReact} desc="140+ Sunsets Witnessed" border /> */}
        <FactSkeleton border />
      </li>
      <li>
        {/* <Fact Icon={FaReact} desc="320+ Books Read" border /> */}
        <FactSkeleton />
      </li>
    </ul>
  );
}
