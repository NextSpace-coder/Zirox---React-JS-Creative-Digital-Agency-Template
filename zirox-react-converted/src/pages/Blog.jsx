import BlogSection from "@/components/blog/BlogList";
import Customer from "@/components/home3/Customer";
import SectionTop from "@/components/shared/SectionTop";

const Blog = () => {
  return (
    <>
      <SectionTop title="Our Blog" />
      <BlogSection />
      <Customer />
    </>
  );
};

export default Blog;
