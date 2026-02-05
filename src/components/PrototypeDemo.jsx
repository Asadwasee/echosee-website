import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function PrototypeDemo() {
  const images = ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png", "/images/1.png"];
  const [isHovering, setIsHovering] = useState(false);
const videoRef = useRef(null);
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Prototype / MVP Demo
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
<motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
  whileHover={{ scale: 1.05 }}
  onHoverStart={() => {
    setIsHovering(true);
    videoRef.current?.play();
  }}
  onHoverEnd={() => {
    setIsHovering(false);
    videoRef.current?.pause();
  }}
>
  <video
    ref={videoRef}
    className="w-full rounded-2xl"
    muted
    loop
    playsInline
  >
    <source src="videos/demo.mp4" type="video/mp4" />
  </video>

  {/* Optional: Play overlay when not hovering */}
  {!isHovering && (
    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white text-black p-4 rounded-full text-xl">▶</div>
    </div>
  )}
</motion.div>



        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
<motion.img
  key={i}
  src={img}
  alt={`Gallery ${i}`}
  className="w-full h-56 object-cover rounded-xl shadow-md cursor-pointer"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
/>

          ))}
        </div>
      </div>
    </section>
  );
}
