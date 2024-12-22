import Hero from "@/components/custom/Hero";
import Gallery from "@/pages/gallery/Gallery";
import NotFound from "@/pages/not_found/NotFound";
import LatestDolls from "@/pages/gallery/LatestDolls";
import CustomerPhotos from "@/pages/gallery/CustomerPhotos";
import Orders from "@/pages/shop/Orders";
import CustomOrders from "@/pages/shop/CustomOrders";
import Promotions from "@/pages/shop/Promotions";
import OurStory from "@/pages/about/OurStory";
import Process from "@/pages/about/Process";
import Reviews from "@/pages/about/Reviews";
import { RouteConfig } from "@/types/RouteConfig";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/gallery/all",
    element: <Gallery />,
  },
  {
    path: "/gallery/latest_dolls",
    element: <LatestDolls />,
  },
  {
    path: "/gallery/customer_photos",
    element: <CustomerPhotos />,
  },
  {
    path: "/shop/orders",
    element: <Orders />,
  },
  {
    path: "/shop/custom_orders",
    element: <CustomOrders />,
  },
  {
    path: "/shop/promotions",
    element: <Promotions />,
  },
  {
    path: "/about/our_story",
    element: <OurStory />,
  },
  {
    path: "/about/process",
    element: <Process />,
  },
  {
    path: "/about/reviews",
    element: <Reviews />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
