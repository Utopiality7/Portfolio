import StatisticSkeleton from "./StatisticSkeleton";

export default function StatisticsListSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-5 px-12 py-8 sm:grid-cols-2 md:grid-cols-3">
      {new Array(6).fill(0).map((_, idx) => (
        <StatisticSkeleton key={idx} />
      ))}
    </ul>
  );
}
