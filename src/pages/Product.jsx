import { motion } from "framer-motion";
import ScrollReveal, { FadeIn, ScaleIn } from '../components/ScrollReveal'
import { FaMicrophone, FaTextHeight, FaSmile, FaLanguage, FaWifi, FaVolumeUp, FaPalette } from "react-icons/fa";
import ProductFeatures from "../components/ProductFeatures";
import HardwareSpecs from "../components/HardwareSpecs";
import PrototypeDemo from "../components/PrototypeDemo";

export default function Product() {


const features = [
  { icon: <FaMicrophone />, title: "Real-time Transcription", desc: "Live captions as you speak with near-zero latency." },
  { icon: <FaTextHeight />, title: "Adjustable Font Size", desc: "Increase or decrease subtitle size instantly." },
  { icon: <FaSmile />, title: "Emoji Subtitles", desc: "Smart emoji suggestions based on speech emotion." },
  { icon: <FaLanguage />, title: "Multilingual Support", desc: "Urdu + English with 20+ premium languages." },
  { icon: <FaWifi />, title: "Offline AI Processing", desc: "Works even without an internet connection." },
  { icon: <FaVolumeUp />, title: "Noise-Cancelling Mic", desc: "Crystal clear voice capture in noisy environments." },
  { icon: <FaPalette />, title: "Stylish Design", desc: "Minimal, modern, and user-friendly UI." },
];

  return (
    <div className="min-h-screen">
<ProductFeatures features={features} />

<HardwareSpecs />

<PrototypeDemo />
</div>

  );
}
