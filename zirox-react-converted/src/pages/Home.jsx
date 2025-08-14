import Blog from "@/components/home1/Blog";
import Header from "@/components/home1/Header";
import Hero from "@/components/home1/Hero";
import HowItWork from "@/components/home1/HowItWork";
import Info from "@/components/home1/Info";
import Introduction from "@/components/home1/Introduction";
import Pricing from "@/components/home1/Pricing";
import Projects from "@/components/home1/Projects";
import Service from "@/components/home1/Service";
import TeamMembers from "@/components/home1/Team";
import Testimonial from "@/components/home1/Testimonial";
import WhyChoose from "@/components/home1/WhyChoose";
import Footer from "@/components/home3/Footer";

const Home = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- Introduction Section --> */}
      <Introduction />

      {/* <!-- Info Section --> */}
      <Info />

      {/* <!-- Services Section --> */}
      <Service />

      {/* <!-- Latest Projects --> */}
      <Projects />

      {/* <!-- Pricing Section --> */}
      <Pricing />

      {/* <!-- How It Work --> */}
      <HowItWork />

      {/* <!-- Choose Us --> */}
      <WhyChoose />

      {/* <!-- Team Section --> */}
      <TeamMembers />

      {/* <!-- Testimonials Section --> */}
      <Testimonial />

      {/* <!-- Blog Section --> */}
      <Blog />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default Home;
