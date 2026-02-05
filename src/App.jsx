import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";

import Home from "./pages/Home";
import About from "./pages/About";
import PricingSection from "./components/PricingSection";
import Shop from "./pages/Shop";
import HowItWorks from "./pages/HowItWorks";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        {/* Navbar always visible */}
        <Navbar />

        {/* Routed content */}
        <main className="flex-1">
          <Routes>

            <Route path="/product" element={<Product />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/preorder" element={<Shop />} />

          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
