import Footer from "@/components/home3/Footer";
import Header from "@/components/home3/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default RootLayout;
