import HowItWork from "@/components/home1/HowItWork";
import Info from "@/components/home1/Info";
import Customer from "@/components/home3/Customer";
import PopularServices from "@/components/home3/Services";
import SectionTop from "@/components/shared/SectionTop";

const Services = () => {
  return (
    <>
      <SectionTop title={"Services"} />
      <PopularServices />
      <Info />
      <HowItWork />
      <Customer />
    </>
  );
};

export default Services;
