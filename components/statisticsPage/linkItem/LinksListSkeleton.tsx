import LinkItemSkeleton from "./LinkItemSkeleton";

export default function LinksListSkeleton() {
  return (
    <ul className="px-12 py-8 mb-8 space-y-6">
      {new Array(5).fill(0).map((_, idx) => (
        <LinkItemSkeleton key={idx} />
      ))}
    </ul>
  );
}
