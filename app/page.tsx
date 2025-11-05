import type { NextPage } from "next";
import "react-loading-skeleton/dist/skeleton.css";
import { ProfileData } from "@/types";
import HomePage from "./components/HomePage";

const getProfileData = async (): Promise<ProfileData> => {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query GetProfile {
          profiles {
            bio
            cv
            id
            name
            ownersPhoto {
              url
            }
            bgImages {
              url
            }
          }
        }
      `,
    }),
    next: { revalidate: 600 },
  });

  const { data } = await response.json();

  return data?.profiles[0];
};

const Home: NextPage = async () => {
  const profileData = await getProfileData();

  return <HomePage profileData={profileData} />;
};

export default Home;
