import Skeleton from "react-loading-skeleton";
import SkeletonWrapper from "../../SkeletonWrapper";

export default function LinkItemSkeleton() {
  return (
    <SkeletonWrapper>
      <li className="relative flex items-center px-6 py-5 bg-gray-800 shadow-lg rounded-xl gap-x-6">
        <Skeleton width={50} height={50} className="rounded-lg" />
        <div className="w-full flex flex-col gap-y-2">
          <Skeleton width={80} height={16} />
          <Skeleton width="80%" height={16} />
        </div>
      </li>
    </SkeletonWrapper>
  );
}
