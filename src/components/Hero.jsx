import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#1A4F63]">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-80"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A4F63] via-[#1A4F6399] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight"
        >
          Barefoot Luxury, Island Soul
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="mt-6 text-lg md:text-xl text-[#E8E1D6]"
        >
          Find your barefoot peace at Tisa’s — an eco‑lodge and cultural haven on Samoa’s cinematic coast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#experiences" className="px-5 py-3 rounded-full bg-white text-[#1A4F63] hover:scale-[1.02] transition-transform">
            Explore Experiences
          </a>
          <a href="/eco-lodge" className="px-5 py-3 rounded-full bg-[#E96C4A] text-white hover:scale-[1.02] transition-transform">
            Eco‑Lodge
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ background: "radial-gradient(ellipse at bottom, rgba(233,108,74,0.25), transparent 60%)" }}
      />
    </section>
  );
}
