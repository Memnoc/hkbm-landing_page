import "./App.css";
import Footer from "@/components/custom/Footer";
import Navbar from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";

function App() {
  return (
    <>
      <div className="navbar_container bg-gradient-to-b from-pink-100 to-purple-100 min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
