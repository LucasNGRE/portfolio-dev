"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 0 && top + section.offsetHeight > 0) {
        currentSection = section.id;  // ID de la section active
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="flex justify-center fixed top-3 w-full z-10">
      <nav className="flex items-center gap-3 px-4 py-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className={`nav-item ${activeSection === "home" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          Accueil
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className={`nav-item ${activeSection === "projects" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          Projets
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className={`nav-item ${activeSection === "about" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          A propos
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className={`nav-item ${activeSection === "contact" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
