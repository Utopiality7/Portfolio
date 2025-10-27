import { FieldValueData } from "../../../types";
import DevelopmentSkeleton from "./DevelopmentSkeleton";

interface Props {
  development: FieldValueData[] | undefined;
}

export default function Development({ development }: Props) {
  return (
    <div className="pt-11">
      {development ? (
        development.map((f: FieldValueData) => (
          <div key={f.id} className="mb-7">
            <h3 className="capitalize text-2xl text-gray-300">{f.field}</h3>
            <progress
              className="progress progress-warning w-full bg-gray-800 mt-2.5"
              value={f.value}
              max="100"
            ></progress>
          </div>
        ))
      ) : (
        <>
          <DevelopmentSkeleton />
          <DevelopmentSkeleton />
          <DevelopmentSkeleton />
          <DevelopmentSkeleton />
        </>
      )}
    </div>
  );
}
