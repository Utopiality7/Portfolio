import { IconType } from "react-icons";

export interface ProfileData {
  id: string;
  cv: string;
  name: string;
  ownersPhoto: { url: string };
  bgImages: { url: string }[];
}

export interface ServiceData {
  id: string;
  title: string;
  icon: IconType | string;
  description: string;
}
