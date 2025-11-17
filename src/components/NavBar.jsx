import { Link, NavLink } from "react-router-dom";
import { Menu, Turtle, Waves, Leaf, Home, Info, Compass, Hotel, ShieldCheck, Newspaper, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/experiences", label: "Experiences", icon: Compass },
  { to: "/eco-lodge", label: "Eco‑Lodge", icon: Hotel },
  { to: "/marine-reserve", label: "Marine Reserve", icon: Waves },
  { to: "/responsibility", label: "Responsibility", icon: ShieldCheck },
  { to: "/press", label: "Press & Reviews", icon: Newspaper },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(250,247,240,0.7)] border-b border-[rgba(26,79,99,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Turtle className="w-6 h-6 text-[#1A4F63] group-hover:scale-105 transition-transform" />
          <span className="font-serif text-lg tracking-wide text-[#1A4F63]">Tisa’s Barefoot</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `px-3 py-2 rounded-full text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[#1A4F63] text-white shadow-sm"
                  : "text-[#1A4F63] hover:bg-[#E8E1D6] hover:text-[#1A4F63]"
              }`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-full border border-[#E8E1D6] text-[#1A4F63]"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(26,79,99,0.08)] bg-[rgba(250,247,240,0.95)]">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                  isActive ? "bg-[#1A4F63] text-white" : "text-[#1A4F63] bg-[#E8E1D6]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
