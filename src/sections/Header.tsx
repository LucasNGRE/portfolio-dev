"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/locales/client";
import { LocaleSelect } from "@/app/[locale]/LocaleSelect"; // adapte chemin si besoin

export const Header = () => {
  const t = useI18n();
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 0 && top + section.offsetHeight > 0) {
        currentSection = section.id;
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
    <header className="fixed top-3 w-full z-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4">

      {/* Toggle - mobile order 1 (en haut), desktop normal order */}
      <div className="flex-shrink-0 order-1 md:order-2">
        <LocaleSelect />
      </div>

      {/* Navbar - mobile order 2 (en dessous), desktop normal order */}
      <nav
        className="flex items-center gap-3 px-4 py-1 border border-white/15 rounded-full bg-white/10 backdrop-blur
                   flex-nowrap overflow-x-auto justify-center md:justify-start max-w-4xl w-full md:w-auto order-2 md:order-1"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className={`nav-item ${activeSection === "home" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          {t("home")}
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className={`nav-item ${activeSection === "projects" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          {t("projects")}
        </a>
        <a
  href="#about"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("about");
  }}
  className={`nav-item max-w-[80px] text-center whitespace-nowrap
    ${activeSection === "about" ? "border-b-2 border-white" : ""}
    hover:bg-white/50 transition-all duration-200`}
>
  {t("about")}
</a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className={`nav-item ${activeSection === "contact" ? "active" : ""} hover:bg-white/50 transition-all duration-200`}
        >
          {t("contact")}
        </a>
      </nav>

    </header>
  );
};
