import Skeleton from "react-loading-skeleton";
import SkeletonWrapper from "../../SkeletonWrapper";

export default function StatisticSkeleton() {
  return (
    <SkeletonWrapper>
      <li className="relative px-8 py-4 bg-gray-800 rounded-xl">
        <Skeleton width="75%" height={20} className="mb-2.5" />
        <Skeleton width="50%" height={20} />
      </li>
    </SkeletonWrapper>
  );
}
