import ClientSkeleton from "./ClientSkeleton";

export default function ClientsSkeleton() {
  return (
    <div>
      <ul className="logos grid grid-cols-4">
        <li>
          <ClientSkeleton border />
        </li>
        <li>
          <ClientSkeleton border />
        </li>
        <li>
          <ClientSkeleton border />
        </li>
        <li>
          <ClientSkeleton />
        </li>
      </ul>
    </div>
  );
}
