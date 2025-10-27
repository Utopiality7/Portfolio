import PriceSkeleton from "./PriceSkeleton";

export default function PricesSkeleton() {
  return (
    <div>
      <ul className="prices grid grid-cols-2">
        <li className="relative vCustomLine">
          <PriceSkeleton />
        </li>
        <li>
          <PriceSkeleton />
        </li>
      </ul>
    </div>
  );
}
