import Skeleton from "react-loading-skeleton";
import SkeletonWrapper from "../SkeletonWrapper";

interface Props {
  border?: boolean;
}

export default function FactSkeleton({ border }: Props) {
  return (
    <SkeletonWrapper>
      <div
        className={`w-full h-fit flex flex-col items-center py-10 px-12 ${
          border && "relative vCustomLine"
        }`}
      >
        <Skeleton circle={true} width={65} height={65} />
        <Skeleton
          className="text-2xl leading-relaxed tracking-wide text-center"
          width={100}
          style={{ marginTop: "1rem" } as React.CSSProperties}
        />
      </div>
    </SkeletonWrapper>
  );
}
