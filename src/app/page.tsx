"use client";
import { About } from "@/components/aboutme";
import { Contact } from "@/components/contact";
import { HeroScrollDemo } from "@/components/containerscroll";
import { Education } from "@/components/education";
import { FlipWordsDemo } from "@/components/flipwords";
import { FloatingDockDemo } from "@/components/floatingdock";
import { Projects } from "@/components/projects";
import { WhatIDo } from "@/components/whatido";
import { WorldMapDemo } from "@/components/worldglobe";

export default function Home() {
  return (
    <>
      <HeroScrollDemo />
      <FlipWordsDemo />
      <div id="about">
        <About />
      </div>
      <WhatIDo />
      <Education />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <WorldMapDemo />
      <FloatingDockDemo />
    </>
  );
}
