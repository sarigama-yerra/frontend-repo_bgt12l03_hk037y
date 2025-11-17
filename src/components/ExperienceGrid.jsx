import { motion } from "framer-motion";
import { Utensils, Lotus, Hotel, Waves, Compass } from "lucide-react";

const items = [
  { title: "Barefoot Bar", desc: "Island cocktails, ocean breeze.", icon: Utensils },
  { title: "Fresh Island Cuisine", desc: "From reef to table, cooked with love.", icon: Utensils },
  { title: "Meditation & Beach Chill", desc: "Unplug, breathe, and be.", icon: Lotus },
  { title: "Cultural Immersion", desc: "Experience Samoa’s living culture.", icon: Compass },
  { title: "Snorkeling & Reef", desc: "Swim the Alega Marine Reserve.", icon: Waves },
  { title: "Eco‑Lodge", desc: "Sleep to ocean rhythms.", icon: Hotel },
];

export default function ExperienceGrid() {
  return (
    <section id="experiences" className="bg-[#FAF7F0] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-[#1A4F63]">Experiences</h2>
        <p className="mt-2 text-[#3A2F28]">Warm, authentic, and gently luxurious.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl p-5 bg-[#E8E1D6] text-[#1A4F63] shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="w-6 h-6" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-[#3A2F28] text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
