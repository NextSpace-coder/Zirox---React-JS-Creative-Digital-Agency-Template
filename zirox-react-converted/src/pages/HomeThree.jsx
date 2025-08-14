import AboutUs3 from "@/components/home3/About";
import Blogs from "@/components/home3/Blogs";
import Contact from "@/components/home3/Contact";
import Customer from "@/components/home3/Customer";
import Footer from "@/components/home3/Footer";
import Header from "@/components/home3/Header";
import Hero from "@/components/home3/Hero";
import Projects from "@/components/home3/Projects";
import PopularServices from "@/components/home3/Services";
import Team from "@/components/home3/Team";
import Testimonial from "@/components/home3/Testimonial";
import WhyUs from "@/components/home3/WhyUs";
import WorkingProcess from "@/components/home3/WorkingProcess";

const HomeThree = () => {
  return (
    <>
      <Header />
      {/* <!-- Header End --> */}

      {/* <!-- Hero Section --> */}
      <Hero />
      {/* <!-- Hero Section End --> */}

      {/* <!-- About Section --> */}
      <AboutUs3 />
      {/* <!-- About Section End --> */}

      {/* <!-- Services Section --> */}
      <PopularServices />
      {/* <!-- Services Section End --> */}

      {/* <!-- Latest Projects Section --> */}
      <div className="pt-120">
        <Projects />
      </div>
      {/* <!-- Latest Projects Section End --> */}

      {/* <!-- Working Process Section --> */}
      <WorkingProcess />
      {/* <!-- Working Process Section End --> */}

      {/* <!-- Team Section --> */}
      <Team />
      {/* <!-- Team Section End --> */}

      {/* <!-- Why Choose Us Section --> */}
      <WhyUs />
      {/* <!-- Why Choose Us Section End --> */}

      {/* <!-- Testimonials Section --> */}
      <Testimonial />
      {/* <!-- Testimonials Section End --> */}

      {/* <!-- Blog Section --> */}
      <Blogs />
      {/* <!-- Blog Section End --> */}

      {/* <!-- Contact Section --> */}
      <Contact />
      {/* <!-- Contact Section End --> */}

      {/* <!-- Customer Retention Section --> */}
      <Customer />
      {/* <!-- Customer Retention Section End --> */}

      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- Footer End --> */}
    </>
  );
};

export default HomeThree;
