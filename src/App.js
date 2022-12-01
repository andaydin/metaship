import "./App.css";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import MetaShip from "./pages/MetaShip";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  console.log(location);

  return (
    <AnimatePresence
      location={location}
      key={location.pathname}
      exitBeforeEnter
    >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/metaship" element={<MetaShip />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      {location.pathname !== "/" && <Footer />}
    </AnimatePresence>
  );
}

export default App;
