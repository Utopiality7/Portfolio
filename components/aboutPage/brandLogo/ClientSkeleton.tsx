import SkeletonWrapper from "../../SkeletonWrapper";
import Skeleton from "react-loading-skeleton";

export default function ClientSkeleton({
  border,
  pos,
}: {
  border: boolean;
  pos: number;
}) {
  return (
    <SkeletonWrapper>
      <div
        className={`py-16 px-12 relative vCustomLine before:right-0 ${
          border
            ? `${pos === 1 ? "before:hidden sm:before:block" : "before:block"}`
            : "before:hidden"
        }`}
      >
        <Skeleton height={30} />
      </div>
    </SkeletonWrapper>
  );
}
