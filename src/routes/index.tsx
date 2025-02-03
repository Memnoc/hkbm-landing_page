import Hero from "@/components/custom/Hero";
import NotFound from "@/pages/not_found/NotFound";
import { RouteConfig } from "@/types/RouteConfig";
import About from "@/pages/about/About";
// import Shop from "@/pages/shop/Shop";
import Contact from "@/pages/contact/Contact";
// import Gallery from "@/pages/gallery/Gallery";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/shop",
  //   element: <Shop />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   path: "/gallery/all",
  //   element: <Gallery />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
];
