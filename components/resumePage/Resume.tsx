import Testimonial from "../Testimonial";
import Title from "../Title";
import MyResume from "./myResume/MyResume";
import Skills from "./skills/Skills";
import { quoteData } from "@/data";

export default function Resume() {
  return (
    <div className="bg-gray-900 w-full max-h-full h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

      <Title name="skills" />
      <Skills />

      <Title name="quote" />
      <Testimonial testimonial={quoteData} />
    </div>
  );
}
