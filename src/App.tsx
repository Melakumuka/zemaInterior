import { useEffect, useState } from "react";
import { PROJECTS } from "./data/site";
import type { Project } from "./data/site";
import ToastProvider from "./components/Toast";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Testimonials from "./components/Testimonials";
import Journal from "./components/Journal";
import CtaBand from "./components/CtaBand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTION_IDS = ["home", "about", "services", "process", "projects", "journal", "contact"];

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const selIdx = selected ? PROJECTS.findIndex((p) => p.id === selected.id) : -1;
  const total = PROJECTS.length;

  return (
    <ToastProvider>
      <div className="min-h-screen overflow-x-clip bg-paper font-body text-ink">
        <div className="noise" aria-hidden />

        <Header active={active} />

        <main>
          <HeroSlider projects={PROJECTS} onOpen={setSelected} />
          <Marquee />
          <About />
          <Services />
          <Process />
          <Projects projects={PROJECTS} onOpen={setSelected} />
          <Testimonials />
          <Journal />
          <CtaBand />
          <Contact />
        </main>

        <Footer onOpen={setSelected} />

        {selected && selIdx >= 0 && (
          <ProjectModal
            project={selected}
            index={selIdx}
            total={total}
            onClose={() => setSelected(null)}
            onPrev={() => setSelected(PROJECTS[(selIdx - 1 + total) % total])}
            onNext={() => setSelected(PROJECTS[(selIdx + 1) % total])}
          />
        )}
      </div>
    </ToastProvider>
  );
}
