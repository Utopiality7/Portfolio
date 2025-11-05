import MyIcon from "../../MyIcon";
import { FactData } from "@/types";

interface Props {
  fact: FactData;
  border: boolean;
  pos: number;
}

export default function Fact({ fact, border, pos }: Props) {
  return (
    <li
      className={`w-full h-fit flex flex-col items-center py-10 px-12 relative vCustomLine before:right-0 ${
        border
          ? `${pos === 1 ? "before:hidden sm:before:block" : "before:block"}`
          : "before:hidden"
      }`}
    >
      <MyIcon Icon={fact.icon} />
      <p className="text-2xl text-gray-300 leading-relaxed tracking-wide text-center mt-4">
        {fact.description}
      </p>
    </li>
  );
}
