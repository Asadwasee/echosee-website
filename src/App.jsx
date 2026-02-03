// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />

//       <main id="main" className="flex-1 p-6">
//         <h1 className="text-4xl font-bold">
//           See What You Cannot Hear
//         </h1>
//         <p className="mt-4 text-gray-600">
//           Hero section text
//         </p>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SubtitleDemo from './components/SubtitleDemo'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar - Sticky at top */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Subtitle Demo Section */}
        <SubtitleDemo />

        {/* Pricing Section */}
        <PricingSection />

        {/* You can add more sections here later */}
        {/* <ProductFeatures /> */}
        {/* <HowItWorks /> */}
        {/* <Impact /> */}
        {/* <Contact /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
