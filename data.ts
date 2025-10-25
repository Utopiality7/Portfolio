import {
  FaRegUser,
  FaRegListAlt,
  FaEye,
  FaRegNewspaper,
  FaReact,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { ServiceData } from "./types";

export const menus = [
  { id: 1, label: "about", Icon: FaRegUser },
  { id: 2, label: "resume", Icon: FaRegListAlt },
  { id: 3, label: "works", Icon: FaEye },
  { id: 4, label: "blog", Icon: FaRegNewspaper },
  { id: 5, label: "contact", Icon: FiSend },
  { id: 6, label: "products", Icon: MdComputer },
];

export const socialMedia = [
  { id: 1, Icon: AiOutlineInstagram, label: "Instagram" },
  { id: 2, Icon: AiOutlineTwitter, label: "Twitter" },
  { id: 3, Icon: AiOutlineGithub, label: "Github" },
  { id: 4, Icon: AiFillLinkedin, label: "Linkedin" },
  { id: 5, Icon: AiOutlineWhatsApp, label: "WhatsApp" },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: FaReact,
    description:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Front-end",
    Icon: FaReact,
    description:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 3,
    title: "Front-end",
    Icon: FaReact,
    description:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 4,
    title: "Front-end",
    Icon: FaReact,
    description:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
];
