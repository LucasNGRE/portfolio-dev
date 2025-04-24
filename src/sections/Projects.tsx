import landingpage from "@/assets/images/landing-page.png";
import siteAtelier from "@/assets/images/site-atelier.png";
import bmwapp from "@/assets/images/bmw-site.png";
import flipit from "@/assets/images/flipit.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Holberton School",
    year: "2024",
    title: "One Up Shad Landing Page",
    results: [
      { title: "Project from scratch (HTML, CSS, JavaScript)" },
      { title: "Interface sombre avec animation au scroll" },
      { title: "Promotion d'un leurre emblématique pour la pêche" },
    ],
    link: "https://lucasngre.github.io/Responsive_landing-page/",
    image: landingpage,
  },
  {
    company: "Bonnefis Automobile",
    year: "2024",
    title: "Atelier Bonnefis",
    results: [
      { title: "Premier projet réalisé avec Webflow" },
      { title: "Création d'un site web pour les ateliers (mécanique et carrosserie)" },
      { title: "Développement d'un site web pour refléter la nouvelle identité visuelle des ateliers" },
    ],
    link: "https://www.atelierbonnefis.com/",
    image: siteAtelier,
  },
  {
    company: "Holberton School",
    year: "2024",
    title: "Showcase Car 3D",
    results: [
      { title: "Projet pour découvrir Threejs" },
      { title: "Développer une expérience utilisateur incroyable" },
      { title: "Exemple de canva utilisable sur un site vitrine" },
    ],
    link: "https://showcase-car-nine.vercel.app/",
    image: bmwapp,
  },
  {
    company: "Holberton School",
    year: "2024",
    title: "Flip It marketplace",
    results: [
      { title: "Projet final de la première année à Holberton School" },
      { title: "Une marketplace avec une bonne UI et UX" },
      { title: "La partie login est en pause actuellement" },
    ],
    link: "https://flip-it-iota.vercel.app/landing-page",
    image: flipit,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrown="PROJETS" title="Réalisations principales" description="Découvrez comment j'ai conçu et réalisé des projets de développement web pour répondre à des besoins spécifiques." />
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project, projectIndex) => (
              <Card key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link}>
                    <button 
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 
                                hover:bg-gray-950/50 hover:text-white transition-colors duration-200 ease-in-out">
                      <span>Découvrir</span>
                      <ArrowUpRightIcon className="size-4 ml-2" />
                    </button>

                    </a>
                  </div>
                  <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  </div>
                </div>
              </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
