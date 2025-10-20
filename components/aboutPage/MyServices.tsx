import MyService from "./MyService";
import { FaReact } from "react-icons/fa";
import ServiceSkeleton from "./ServiceSkeleton";

export default function MyServices() {
  return (
    <ul className="services grid grid-cols-2">
      <li className="relative vCustomLine">
        <MyService name="front-end" Icon={FaReact} border />
        <MyService name="front-end" Icon={FaReact} />
        {/* <ServiceSkeleton border />
        <ServiceSkeleton /> */}
      </li>
      <li>
        <MyService name="front-end" Icon={FaReact} border />
        <MyService name="front-end" Icon={FaReact} />
        {/* <ServiceSkeleton border />
        <ServiceSkeleton /> */}
      </li>
    </ul>
  );
}
