import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main id="main" className="flex-1 p-6">
        <h1 className="text-4xl font-bold">
          See What You Cannot Hear
        </h1>
        <p className="mt-4 text-gray-600">
          Hero section text
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
