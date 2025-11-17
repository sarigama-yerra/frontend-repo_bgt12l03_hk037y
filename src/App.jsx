import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ExperienceGrid from "./components/ExperienceGrid";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceGrid />
    </>
  );
}

function Placeholder({ title }) {
  return (
    <main className="min-h-[60vh] bg-[#FAF7F0]">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl text-[#1A4F63]">{title}</h1>
        <p className="mt-3 text-[#3A2F28]">This page is coming next. We’re crafting an eco‑luxury experience.</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF7F0] text-[#3A2F28]">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Placeholder title="About — The Legend of Tisa’s" />} />
          <Route path="/experiences" element={<Placeholder title="Experiences" />} />
          <Route path="/eco-lodge" element={<Placeholder title="Eco‑Lodge" />} />
          <Route path="/marine-reserve" element={<Placeholder title="Alega Marine Reserve" />} />
          <Route path="/responsibility" element={<Placeholder title="Responsibility" />} />
          <Route path="/press" element={<Placeholder title="Press & Reviews" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
