import BlogListStandard from "@/components/blog/BlogListStandard";
import Customer from "@/components/home3/Customer";
import SectionTop from "@/components/shared/SectionTop";

const BlogStandard = () => {
  return (
    <>
      <SectionTop title="Blog Standard" />
      <BlogListStandard />
      <Customer />
    </>
  );
};

export default BlogStandard;
