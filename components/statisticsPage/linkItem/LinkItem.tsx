import { BiLinkExternal } from "react-icons/bi";
import { SocialMediaData } from "@/types";
import MyIcon from "@/components/MyIcon";
import Link from "next/link";

interface Props {
  socialMedia: SocialMediaData;
}

export default function LinkItem({ socialMedia }: Props) {
  return (
    <li className="relative flex items-center px-6 py-5 bg-gray-800 shadow-lg rounded-xl gap-x-6 group">
      <MyIcon
        Icon={socialMedia.icon}
        wrapperClassName="flex items-center justify-center w-20 min-w-[5rem] h-20 border-2 border-gray-700 border-solid rounded-lg group"
        iconClassName="text-5xl"
        style={{
          color: socialMedia.logoColor.hex,
        }}
      />

      <div>
        <Link
          href={socialMedia.mediaUrl}
          target="_blank"
          rel="noreferrer"
          className="text-2xl font-semibold text-white transition-all duration-300 hover:text-main-orange"
        >
          {socialMedia.label}
        </Link>
        <p className="text-[1.3rem] font-medium text-gray-400">
          {socialMedia.info}
        </p>
      </div>

      <Link
        target="_blank"
        rel="noreferrer"
        href={socialMedia.mediaUrl}
        className={`absolute flex items-center justify-center w-12 h-12 transition-all duration-200 bg-gray-900 rounded-full opacity-0 cursor-pointer -top-2 -right-3 group-hover:opacity-100`}
      >
        <BiLinkExternal className="text-3xl text-white" />
      </Link>
    </li>
  );
}
