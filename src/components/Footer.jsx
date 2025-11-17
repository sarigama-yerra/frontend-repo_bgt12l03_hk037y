import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A4F63] text-[#FAF7F0] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl">Tisa’s Barefoot</h3>
          <p className="mt-2 text-[#E8E1D6]">Barefoot luxury on Samoa’s cinematic coast.</p>
        </div>
        <div>
          <h4 className="font-semibold">Visit</h4>
          <p className="mt-2 flex items-center gap-2"><MapPin className="w-4 h-4"/>Alega Beach, Tutuila, American Samoa</p>
          <p className="mt-1 flex items-center gap-2"><Clock className="w-4 h-4"/>Open most days — call ahead</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 flex items-center gap-2"><Phone className="w-4 h-4"/>+1 (684) 000‑0000</p>
          <p className="mt-1 flex items-center gap-2"><Mail className="w-4 h-4"/>hello@tisabarefoot.example</p>
        </div>
      </div>
      <div className="border-t border-[rgba(232,225,214,0.2)] py-4 text-center text-sm text-[#E8E1D6]">
        © {new Date().getFullYear()} Tisa’s Barefoot Bar & Eco‑Lodge — Protecting our reef, together.
      </div>
    </footer>
  );
}
