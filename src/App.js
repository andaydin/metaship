import "./App.css";
import Header from "./navigation/Header";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import MetaShip from "./pages/MetaShip";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

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
        <Route path="/product" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
