"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReactiveVar } from "@apollo/client/react";
import { currentMenu, currentWork, showMenu } from "@/lib/apollo/apolloClient";
import { menus } from "@/data";
import Menus from "@/components/Menus";
import ProfileCard from "@/components/ProfileCard";
import Background from "@/components/Background";
import LoaderPage from "@/components/LoaderPage";
import { ProfileData } from "@/types";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import WorkLb from "@/components/worksPage/WorkLb";
import SideMenuLb from "@/components/SideMenuLb";

const clipPaths = [
  "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
  "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
];

interface HomePageProps {
  profileData: ProfileData;
}

export default function HomePage({ profileData }: HomePageProps) {
  const menuId = useReactiveVar(currentMenu);
  const workId = useReactiveVar(currentWork);
  const sideMenu = useReactiveVar(showMenu);
  const [loaderPage, setLoaderPage] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoaderPage(false), 3500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [setLoaderPage]);

  return (
    <main className="min-h-screen relative home flex justify-center items-center">
      {loaderPage && <LoaderPage />}

      <Background />
      <AnimatePresence>
        {workId && <WorkLb workId={workId} reactiveVar={currentWork} />}
      </AnimatePresence>

      <SideMenuLb sideMenu={sideMenu} showMenu={showMenu} />

      <section className="z-10 w-full h-full lg:w-[110rem] xl:w-[126.8rem] lg:h-[62.5rem] lg:flex p-24 lg:p-0">
        <Menus showSideMenu={showMenu} />
        <ProfileCard profileData={profileData} />

        <div className="xl:w-[70.5rem] lg:w-[63rem] w-full h-full lg:py-6">
          <div className="relative bg-gray-900 h-full before:content-[''] before:absolute before:top-0 before:left-0 before:right-[0.7rem] before:h-6 before:bg-gray-900 before:z-30 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-[0.7rem] after:h-6 after:bg-gray-900 after:z-30">
            <AnimatePresence mode="wait">
              {menus.map(
                (m) =>
                  menuId === m.id && (
                    <motion.div
                      id="scrollableDiv"
                      key={m.id}
                      className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll"
                      initial="initialState"
                      animate="animateState"
                      exit="exitState"
                      transition={{
                        duration: 0.75,
                      }}
                      variants={{
                        initialState: {
                          opacity: 0,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        },
                        animateState: {
                          opacity: 1,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        },
                        exitState: {
                          clipPath:
                            clipPaths[
                              Math.floor(Math.random() * clipPaths.length)
                            ],
                        },
                      }}
                    >
                      <m.Component />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}
