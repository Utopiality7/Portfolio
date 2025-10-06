import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Background from "../components/Background";
import Menus from "../components/Menus";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen relative home flex justify-center items-center">
      <Background />
      <section className="z-10 w-[126.8rem] h-[62.5rem] flex">
        <Menus />
        <ProfileCard />

        <div className="w-[71.6rem] h-full py-6">
          <About />
        </div>
      </section>
    </main>
  );
};

export default Home;
