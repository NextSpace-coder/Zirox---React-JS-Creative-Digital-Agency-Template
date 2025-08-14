import NotFound from "@/pages/404";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import BlogStandard from "@/pages/BlogStandard";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import HomeThree from "@/pages/HomeThree";
import HomeTwo from "@/pages/HomeTwo";
import Portfolio from "@/pages/Portfolio";
import PortfolioDetails from "@/pages/PortfolioDetails";
import ServiceDetails from "@/pages/ServiceDetails";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index-2",
    element: <HomeTwo />,
  },
  {
    path: "/index-3",
    element: <HomeThree />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services-details",
        element: <ServiceDetails />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio-details",
        element: <PortfolioDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-standard",
        element: <BlogStandard />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Team />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
