'use client';
import SplitType from "split-type"
import Experience from "../components/Experience"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import experiences from "../../../public/experiences.json"
import projects from "../../../public/projects.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Project from "../components/Project";

export default function Home() {
  useEffect(() => {
    let text = SplitType.create('.name-text');
    let characters = document.querySelectorAll('.char');

    for(let i=0; i<characters.length; i++) {
      characters[i].classList.add('translate-y-full');
    }

    document.querySelector('.name-text').classList.remove('invisible');

    gsap.to('.char', {
      y: -3,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5
    });
  }, [])

  function renderExperiences() {
    return experiences.map((experience) => {
      return <Experience key={experience.company} experience={experience} />
    })
  }

  function renderProjects() {
    return projects.map((project) => {
      return <Project key={project.title} project={project} />
    })
  }

  return (
    <div className='relative'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between max-h-screen'>
            <div>
              <h1 className='name-text text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl invisible' style={{'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
                <a href="/practice" >Duncan Krey</a>
              </h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Frontend Developer</h2>
              <p className='max-w-xs mt-4'>I am passionate about web experiences that empower the user.</p>
              <nav className='nav hidden lg:block' aria-label='In-page jump links'>
                <ul className='mt-16 w-max'>
                  <li>
                    <a className='group flex items-center py-3' href='#about'>
                      <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
                    </a>
                  </li>
                  <li>
                    <a className='group flex items-center py-3' href='#experience'>
                      <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className='group flex items-center py-3' href='#projects'>
                      <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className='ml-1 mt-8 flex items-center' aria-label='Social Media'>
              <li className="mr-5 text-xs" key="github">
                  <a href="https://github.com/duncrob" target="_blank" rel="noreferrer" className="block hover:text-slate-200">
                    <span className="sr-only">Github</span>
                    <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
                  </a>
                </li>
                <li className="mr-5 text-xs" key="instagram">
                  <a href="https://www.instagram.com/duncan.krey/" target="_blank" rel="noreferrer" className="block hover:text-slate-200">
                    <span className="sr-only">Instagram</span>
                    <FontAwesomeIcon className="h-6 w-6" icon={faInstagram} />
                  </a>
                </li>
                <li className="mr-5 text-xs" key="linkedin">
                  <a href="https://www.linkedin.com/in/duncan-krey/" target="_blank" rel="noreferrer" className="block hover:text-slate-200">
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
                  </a>
                </li>
            </ul>
          </header>
          <main id='content' className='pt-24 lg:py-24 lg:w-1/2'>
            <section id='about' className='lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div>
                <p className='mb-4'>
                  Hello! I&apos;m Duncan, a recent graduate from the University of Washington. I graduated with a Bachelor of Science in Informatics, leveraging my skills to become a front-end developer. I am passionate about design that empowers the user.
                </p>
                <p className='mb-4'>
                  My recent experience has been working on websites for various organizations at UW. In my off time, I love enjoying coffee and going snowboarding.
                </p>
              </div>
            </section>
            <section id='experience' className='mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24' aria-label='Experiences'>
              <ol className="group/list">
                {renderExperiences()}
              </ol>
              <div className="mt-12">
                <a href="/Resume.pdf" type="application/pdf" className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group" aria-label="View Full Résumé">
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">View Full </span>
                    <span className="whitespace-nowrap" >
                      <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none" >Résumé</span>
                      <FontAwesomeIcon aria-hidden className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" icon={faArrowRight} />
                    </span>
                  </span>
                </a>
              </div>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list" >
                  {renderProjects()}
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
