import MyIcon from "../../MyIcon";
import { FactData } from "@/types";

interface Props {
  fact: FactData;
  border?: boolean;
}

export default function Fact({ fact, border }: Props) {
  return (
    <div
      className={`w-full h-fit flex flex-col items-center py-10 px-12 ${
        border && "relative vCustomLine"
      }`}
    >
      <MyIcon Icon={fact.icon} />
      <p className="text-2xl text-gray-300 leading-relaxed tracking-wide text-center mt-4">
        {fact.description}
      </p>
    </div>
  );
}
