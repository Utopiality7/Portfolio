import { IconType } from "react-icons";

interface ProfileData {
  id: string;
  cv: string;
  name: string;
  ownersPhoto: { url: string };
  bgImages: { url: string }[];
}

interface ServiceData {
  id: string;
  title: string;
  icon: IconType | string;
  description: string;
}

interface PriceData {
  id: string;
  packageName: string;
  packagePrice: number;
  priceType: string;
  freelanceUrl: string;
  packageServices: PackageServiceData[];
}

interface PackageServiceData {
  id: string;
  isIncluded: boolean;
  packageService: string;
}

interface TestimonialData {
  id: string;
  userName: string;
  userProfession: string;
  quote: string;
  userImage: { url: string };
}

interface ClientData {
  id: string;
  linkLocation: string;
  imgLocation: { url: string };
}

interface FactData {
  id: string;
  icon: IconType | string;
  description: string;
}

interface ExperienceData {
  id: string;
  badge: string;
  description: string;
  isExperience: boolean;
  subTitle: string;
  title: string;
  logo: { url: string };
}

interface SkillData {
  id: string;
  knowledge: string[];
  coding: FieldValueData[];
  development: FieldValueData[];
  languages: FieldValueData[];
}

interface FieldValueData {
  id?: string;
  field: string;
  value: string;
}

interface WorksData {
  id: string;
  title: string;
  images: { url: string }[];
  workTabs: { tab: String }[];
}

interface PageInfoData {
  hasNextPage: boolean;
  endCursor: string;
}

interface WorksConnectionData {
  edges: { node: WorksData }[];
  pageInfo: PageInfoData;
}

interface SingleWorkData {
  id: string;
  description: string;
  title: string;
  workUrl: string;
  clientName: string;
  ownerName: string;
  techStack: string[];
  userActions: string[];
  images: { url: string }[];
  date: Date;
}

interface BlogData {
  id: string;
  blogUrl: string;
  description: string;
  title: string;
  thumbnail: { url: string };
  date: Date;
}

interface BlogsQuery {
  blogs: BlogData[];
}
