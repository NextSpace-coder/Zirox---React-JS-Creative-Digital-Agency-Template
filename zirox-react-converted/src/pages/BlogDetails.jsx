import { blogPosts } from "@/assets/data/blogs";
import Details from "@/components/blog/Details";
import Customer from "@/components/home3/Customer";
import SectionTop from "@/components/shared/SectionTop";
import { useParams } from "react-router-dom"; // Import useNavigate
import NotFound from "./404";

const BlogDetails = () => {
  const { id } = useParams();
  // Initialize navigate

  const blog = blogPosts.find((blog) => blog.id == id);
  // Redirect to 404 if blog not found

  if (!blog) {
    return <NotFound />;
  }

  return (
    <>
      {blog ? (
        <>
          <SectionTop title="Blog Details" />
          <Details blog={blog} />
          <Customer />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default BlogDetails;
