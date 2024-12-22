import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/components/custom/Footer";
import Navbar from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/not_found/NotFound";
import LatestDolls from "./pages/gallery/LatestDolls";
import CustomerPhotos from "./pages/gallery/CustomerPhotos";
import Orders from "./pages/shop/Orders";
import CustomOrders from "./pages/shop/CustomOrders";
import Promotions from "./pages/shop/Promotions";
import OurStory from "./pages/about/OurStory";
import Process from "./pages/about/Process";
import Reviews from "./pages/about/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar_container bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Gallery routes */}
          <Route path="gallery/all" element={<Gallery />} />
          <Route path="/gallery/latest_dolls" element={<LatestDolls />} />
          <Route path="/gallery/customer_photos" element={<CustomerPhotos />} />
          {/* Shop routes */}
          <Route path="/shop/orders" element={<Orders />} />
          <Route path="/shop/custom_orders" element={<CustomOrders />} />
          <Route path="/shop/promotions" element={<Promotions />} />
          {/* About routes */}
          <Route path="/about/our_story" element={<OurStory />} />
          <Route path="/about/process" element={<Process />} />
          <Route path="/about/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
