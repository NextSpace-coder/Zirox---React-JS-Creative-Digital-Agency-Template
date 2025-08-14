import Customer from "@/components/home3/Customer";
import Details from "@/components/service/Details";
import SectionTop from "@/components/shared/SectionTop";

const ServiceDetails = () => {
  return (
    <>
      <SectionTop title={"Service Details"} />
      <Details />
      <Customer />
    </>
  );
};

export default ServiceDetails;
