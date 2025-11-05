import ClientSkeleton from "./ClientSkeleton";

export default function ClientsSkeleton() {
  return (
    <div>
      <ul className="logos grid sm:grid-cols-4 grid-cols-2">
        {new Array(4).fill(0).map((_, idx) => (
          <li key={idx}>
            <ClientSkeleton border={idx !== 3} pos={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
}
