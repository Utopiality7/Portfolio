import dynamic from "next/dynamic";
import { FaRegUser, FaRegListAlt, FaEye, FaRegNewspaper } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import {
  AiFillLinkedin,
  AiOutlineDiscord,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { TestimonialData, MenuData, StatisticsData } from "./types";

const About = dynamic(() => import("@/components/aboutPage/About"));
const Resume = dynamic(() => import("@/components/resumePage/Resume"));
const Works = dynamic(() => import("@/components/worksPage/Works"));
const Blogs = dynamic(() => import("@/components/blogsPage/Blogs"));
const Contact = dynamic(() => import("@/components/contactPage/Contact"));
const GuestBook = dynamic(() => import("@/components/guestbookPage/GuestBook"));
const Stats = dynamic(() => import("@/components/statisticsPage/Stats"));

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
    Component: Stats,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia = [
  {
    id: 1,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    mediaUrl: "https://www.linkedin.com/",
  },
  {
    id: 2,
    Icon: AiOutlineDiscord,
    label: "Discord",
    mediaUrl: "https://www.discord.com/",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    mediaUrl: "https://www.github.com/",
  },
  {
    id: 4,
    Icon: BiLogoTelegram,
    label: "Telegram",
    mediaUrl: "https://www.telegram.com/",
  },
  {
    id: 5,
    Icon: AiOutlineWhatsApp,
    label: "WhatsApp",
    mediaUrl: "https://www.whatsapp.com",
  },
];

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
};

export const statisticsData: StatisticsData[] = [
  {
    title: "articles",
    info: "10",
  },
];
