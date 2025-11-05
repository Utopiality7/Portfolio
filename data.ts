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
import { TestimonialData, MenuData } from "./types";

export const menus: MenuData[] = [
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

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
};
