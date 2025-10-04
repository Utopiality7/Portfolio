import type { NextPage } from "next"
import Head from "next/head"
import Background from "../components/Background"
import Menus from "../components/Menus"
import ProfileCard from "../components/ProfileCard"

const Home: NextPage = () => {
  return (
    <main className="min-h-screen relative home flex justify-center items-center">
      <Background />
      <section className="z-10 w-[126.8rem] h-[62.5rem] flex gap-4">
        <Menus />
        <ProfileCard />
      </section>
    </main>
  )
}

export default Home
