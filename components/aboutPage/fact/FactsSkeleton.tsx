import FactSkeleton from "./FactSkeleton";

export default function FactsSkeleton() {
  return (
    <div>
      <ul className="logos grid sm:grid-cols-4 grid-cols-2 mb-12">
        {new Array(4).fill(0).map((_, idx) => (
          <li key={idx}>
            <FactSkeleton border={idx !== 3} pos={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
}
