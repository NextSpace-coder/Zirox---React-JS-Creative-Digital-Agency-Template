import ContactFormMap from "@/components/contact/ContactFormMap";
import Customer from "@/components/home3/Customer";
import SectionTop from "@/components/shared/SectionTop";

const Contact = () => {
  return (
    <>
      <SectionTop title="Contact Us" />
      <ContactFormMap />
      <Customer />
    </>
  );
};

export default Contact;
