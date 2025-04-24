"use client";

import music from "@/assets/images/music.png";
import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/Card";
import test from "@/assets/images/test.png";
import Image from "next/image";
import TypescriptIcon from "@/assets/icons/typescript-white.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/aveyron2.png";
import smileMemoji from "@/assets/images/lucas-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Typescript',
    iconType: TypescriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'TailwindCSS',
    iconType: TailwindIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'PostgreSQL',
    iconType: PostgresIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: "Musique",
    emoji: '🎵',
    left: "5%",
    top: "5%",
  },
  {
    title: "Skateboarding",
    emoji: '🛹',
    left: "50%",
    top: "5%",
  },

  {
    title: "Gaming",
    emoji: '🎮',
    left: "35%",
    top: "40%",
  },
  {
    title: "Pêche",
    emoji: '🎣',
    left: "10%",
    top: "35%",
  },
  {
    title: "Basketball",
    emoji: '🏀',
    left: "70%",
    top: "45%",
  },
  {
    title: "Films",
    emoji: '🎥',
    left: "5%",
    top: "65%",
  },
  {
    title: "Voyages",
    emoji: '✈️',
    left: "45%",
    top: "70%",
  },


]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrown="A PROPOS" title="Bienvenue dans mon univers" description="Découvrez en plus sur moi" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader title="Best Song" description="'On est Peace' de Chinwvr."/>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={test} alt="Book cover" className="rounded-xl"/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Les outils que j'utilise pour créer des expériences utilisateurs fluides et modernes."
                className=""/>
                <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
                <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader title="En dehors du Code" description="Découvrez mes passions en dehors de l'univers du développement informatique" className="px-6 pt-6"/>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="cursor-pointer inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-ful after:content-[''] after:absolute after:ineset-0 after:outline after:ouline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
