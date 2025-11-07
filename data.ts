import dynamic from "next/dynamic";
import { FaRegUser, FaRegListAlt, FaEye, FaRegNewspaper } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import { TestimonialData, MenuData } from "./types";

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
    label: "stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
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
