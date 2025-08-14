import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import Details from "@/components/portfolio/Details";
import SectionTop from "@/components/shared/SectionTop";

const PortfolioDetails = () => {
  return (
    <>
      <SectionTop title={"Portfolio Details"} />
      <Details />
      <Projects />
      <Customer />
    </>
  );
};

export default PortfolioDetails;
