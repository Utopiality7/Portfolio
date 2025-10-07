import Price from "./Price";
import { FaReact } from "react-icons/fa";

export default function Prices() {
  return (
    <ul className="prices grid grid-cols-2">
      <li className="relative vCustomLine">
        <Price Icon={FaReact} packageName="popular" price={34.99} />
      </li>
      <li>
        <Price Icon={FaReact} packageName="pro" price={49.99} />
      </li>
    </ul>
  );
}
