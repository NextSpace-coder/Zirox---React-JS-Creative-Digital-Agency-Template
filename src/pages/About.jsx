import AboutUs3 from "@/components/home3/About";
import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import Team from "@/components/home3/Team";
import WorkingProcess from "@/components/home3/WorkingProcess";
import SectionTop from "@/components/shared/SectionTop";

const About = () => {
  return (
    <>
      <SectionTop title={"About Us"} />
      <AboutUs3 />
      <Projects />
      <WorkingProcess />
      <Team />
      <Customer />
    </>
  );
};

export default About;
