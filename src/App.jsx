import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";

import Home from "./pages/Home";
import About from "./pages/About";


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
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
