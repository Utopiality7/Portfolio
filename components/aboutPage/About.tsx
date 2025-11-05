import AboutMe from "./aboutMe/AboutMe";
import BrandLogos from "./brandLogo/BrandLogos";
import Facts from "./fact/Facts";
import MyServices from "./service/MyServices";
import Prices from "./price/Prices";
import Testimonials from "./testimonial/Testimonials";
import Title from "../Title";

export default function About() {
  return (
    <>
      <Title name="about me" />
      <AboutMe />

      <Title name="my services" />
      <MyServices />

      <Title name="pricing" />
      <Prices />

      <Title name="clients" />
      <BrandLogos />

      <Title name="testimonials" />
      <Testimonials />

      <Title name="fun facts" />
      <Facts />
    </>
  );
}
