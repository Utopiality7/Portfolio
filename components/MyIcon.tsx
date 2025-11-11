import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";

interface Props {
  Icon: IconType | string;
  size?: string;
  iconClassName?: string;
  style?: React.CSSProperties;
  wrapperClassName?: string;
}

const iconLibraries: { [key: string]: any } = {
  Fa: FaIcons,
  Fi: FiIcons,
  Md: MdIcons,
  Ai: AiIcons,
  Bi: BiIcons,
  Bs: BsIcons,
  Cg: CgIcons,
  Di: DiIcons,
  Gi: GiIcons,
  Go: GoIcons,
  Gr: GrIcons,
  Hi: HiIcons,
  Im: ImIcons,
  Io: IoIcons,
  Ri: RiIcons,
  Si: SiIcons,
  Ti: TiIcons,
};

const getIconComponent = (iconName: string): IconType => {
  const prefix = iconName.substring(0, 2);
  const library = iconLibraries[prefix];

  if (library && library[iconName]) return library[iconName];

  return FaIcons.FaQuestionCircle;
};

export default function MyIcon({
  Icon,
  size,
  iconClassName,
  style,
  wrapperClassName,
}: Props) {
  const IconComponent =
    typeof Icon === "string" ? getIconComponent(Icon) : Icon;

  if (wrapperClassName !== undefined) {
    return (
      <div className={wrapperClassName}>
        <IconComponent
          className={iconClassName || "text-5xl text-main-orange"}
          style={style}
        />
      </div>
    );
  }

  return (
    <div
      className={`icon ${
        size ? size : "w-24 h-24"
      } rounded-full border-2 border-main-orange border-solid flex items-center justify-center`}
    >
      <IconComponent
        className={iconClassName || "text-5xl text-main-orange"}
        style={style}
      />
    </div>
  );
}
