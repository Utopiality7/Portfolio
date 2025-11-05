import dynamic from "next/dynamic";
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

const About = dynamic(() => import("@/components/aboutPage/About"));
const Resume = dynamic(() => import("@/components/resumePage/Resume"));
const Works = dynamic(() => import("@/components/worksPage/Works"));
const Blogs = dynamic(() => import("@/components/blogsPage/Blogs"));
const Contact = dynamic(() => import("@/components/contactPage/Contact"));

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
    Component: Blogs,
  },
  {
    id: 5,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 6,
    label: "products",
    Icon: MdComputer,
    Component: Resume,
  },
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
