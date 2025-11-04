import { ClientData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  client: ClientData;
  border?: boolean;
}

export default function BrandLogo({ client, border }: Props) {
  return (
    <div
      className={`py-16 px-12 ${
        border && "relative vCustomLine before:right-0"
      }`}
    >
      <Link
        href={client.linkLocation}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block relative w-full h-12"
      >
        <Image
          src={client.imgLocation.url}
          alt="linkedin"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50 transition-all duration-300 hover:opacity-100"
        />
      </Link>
    </div>
  );
}
