import Hero from "@/pages/home/Hero";
import NotFound from "@/pages/not_found/NotFound";
import { RouteConfig } from "@/types/RouteConfig";
import About from "@/pages/about/About";

export const routes: RouteConfig[] = [
  {
    path: "/home",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
