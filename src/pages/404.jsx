import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="py-5 my-5">
      <h2 className="text-center fs-2">Page Not Found</h2>
      <Link className="d-flex justify-content-center mt-5" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
