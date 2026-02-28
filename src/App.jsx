import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Search from "./pages/Search";

import Navbar from "./components/Navbar";   // ✅ ADD THIS

import CartDrawer from "./components/CartDrawer";
import FloatingCartButton from "./components/FloatingCartButton";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";

import Electronics from "./pages/Electronics";
import Gaming from "./pages/Gaming";
import Fashion from "./pages/Fashion";

function App() {

  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* ✅ Navbar added here */}
      <Navbar />

      <CursorGlow />
      <ParticleBackground />
      <FloatingCartButton />
      <CartDrawer />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/search" element={<Search />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <ProductGrid />
              </>
            }
          />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/fashion" element={<Fashion />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;