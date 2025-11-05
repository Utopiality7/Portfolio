import Skeleton from "react-loading-skeleton";
import SkeletonWrapper from "../../SkeletonWrapper";

interface Props {
  border: boolean;
  pos: number;
}

export default function FactSkeleton({ border, pos }: Props) {
  return (
    <SkeletonWrapper>
      <div
        className={`w-full h-fit flex flex-col items-center py-10 px-12 relative vCustomLine before:right-0 ${
          border
            ? `${pos === 1 ? "before:hidden sm:before:block" : "before:block"}`
            : "before:hidden"
        }`}
      >
        <Skeleton circle={true} width={65} height={65} />
        <Skeleton
          className="text-2xl text-gray-300 leading-relaxed tracking-wide text-center mt-4"
          width={100}
          style={{ marginTop: "1rem" } as React.CSSProperties}
        />
      </div>
    </SkeletonWrapper>
  );
}
