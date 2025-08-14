import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import SectionTop from "@/components/shared/SectionTop";

const Portfolio = () => {
  return (
    <>
      <SectionTop title={"Portfolio"} />
      <Projects />
      <Customer />
    </>
  );
};

export default Portfolio;
