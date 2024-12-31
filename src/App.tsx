import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar_container bg-pink-100 min-h-screen">
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
