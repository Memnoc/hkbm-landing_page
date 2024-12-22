import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/components/custom/Footer";
import Navbar from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";
import Gallery from "./pages/gallery/Gallery";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import About from "./pages/about/About";
import LatestDolls from "./pages/gallery/LatestDolls";
import CustomerPhotos from "./pages/gallery/CustomerPhotos";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar_container bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="gallery/all" element={<Gallery />} />
          <Route path="/gallery/latest_dolls" element={<LatestDolls />} />
          <Route path="/gallery/customer_photos" element={<CustomerPhotos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
