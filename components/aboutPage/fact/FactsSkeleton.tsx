import FactSkeleton from "./FactSkeleton";

export default function FactsSkeleton() {
  return (
    <div>
      <ul className="logos grid grid-cols-4 mb-12">
        <li>
          <FactSkeleton border />
        </li>
        <li>
          <FactSkeleton border />
        </li>
        <li>
          <FactSkeleton border />
        </li>
        <li>
          <FactSkeleton />
        </li>
      </ul>
    </div>
  );
}
