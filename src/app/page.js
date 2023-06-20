'use client';
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Directory from "./components/Directory";
import MouseTracker from "./components/MouseTracker";
import { useState } from "react";

export default function Home() {
  const [experienceHeight, setExperienceHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);

  return (
    <div className='relative group/spotlight'>
      <MouseTracker />
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Directory experienceHeight={experienceHeight} />
          <main id='content' className='pt-24 lg:py-24 lg:w-1/2'>
            <About />
            <Experiences setExperienceHeight={setExperienceHeight} />
            <Projects setProjectsHeight={setProjectsHeight} />
          </main>
        </div>
      </div>
    </div>
  )
}
