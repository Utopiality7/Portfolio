import { ClientData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  client: ClientData;
  border: boolean;
  pos: number;
}

export default function BrandLogo({ client, border, pos }: Props) {
  return (
    <div
      className={`py-16 px-12 relative vCustomLine before:right-0 ${
        border
          ? `${pos === 1 ? "before:hidden sm:before:block" : "before:block"}`
          : "before:hidden"
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
          style={{ objectFit: "contain" }}
          className="opacity-50 transition-all duration-300 hover:opacity-100"
        />
      </Link>
    </div>
  );
}
