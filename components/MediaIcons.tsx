import Link from "next/link";
import { SocialMediaData } from "@/types";
import MyIcon from "./MyIcon";

interface Props {
  socialMedia: SocialMediaData[];
}

export default function MediaIcons({ socialMedia }: Props) {
  return (
    <div className="flex gap-5 items-center justify-center mt-7">
      {socialMedia.map(({ id, icon, mediaUrl }) => (
        <Link rel="noreferrer" href={mediaUrl} target="_blank" key={id}>
          <MyIcon
            Icon={icon}
            wrapperClassName=""
            iconClassName="text-gray-300 text-3xl transition-all duration-300 hover:text-main-orange cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
}
