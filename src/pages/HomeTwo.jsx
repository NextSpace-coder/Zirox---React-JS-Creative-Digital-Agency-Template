import About from "@/components/home2/About";
import Blog from "@/components/home2/Blog";
import Brand from "@/components/home2/Brand";
import Delivery from "@/components/home2/Delivery";
import Faq from "@/components/home2/Faq";
import Footer from "@/components/home2/Footer";
import Header from "@/components/home2/Header";
import Hero from "@/components/home2/Hero";
import Portfolio from "@/components/home2/Portfolio";
import Pricing from "@/components/home2/Pricing";
import Service from "@/components/home2/Service";
import PopularServices from "@/components/home2/Services";
import Statistics from "@/components/home2/Statistics";
import Testimonial from "@/components/home2/Testimonial";

const HomeTwo = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <Header />

      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- Service Section --> */}
      <Service />

      {/* <!-- About Section --> */}
      <About />

      {/* <!-- Statistics Section --> */}
      <Statistics />

      {/* <!-- Popular Services --> */}
      <PopularServices />

      {/* <!-- Delivery Section --> */}
      <Delivery />

      {/* <!-- FAQ Section --> */}
      <Faq />

      {/* <!-- Pricing Section --> */}
      <Pricing />

      {/* <!-- Portfolio Section --> */}
      <Portfolio />

      {/* <!-- Brnad Section  --> */}
      <Brand />

      {/* <!-- Testimonials Section --> */}
      <Testimonial />

      {/* <!-- Blog Section --> */}
      <Blog />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default HomeTwo;
