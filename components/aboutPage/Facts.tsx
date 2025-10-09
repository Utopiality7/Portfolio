import { FaReact } from "react-icons/fa";
import Fact from "./Fact";

export default function Facts() {
  return (
    <ul className="logos grid grid-cols-4 mb-12">
      <li>
        <Fact Icon={FaReact} desc="500+ Movies Watched" border />
      </li>
      <li>
        <Fact Icon={FaReact} desc="30+ New Recipes Tried" border />
      </li>
      <li>
        <Fact Icon={FaReact} desc="140+ Sunsets Witnessed" border />
      </li>
      <li>
        <Fact Icon={FaReact} desc="320+ Books Read" border />
      </li>
    </ul>
  );
}
