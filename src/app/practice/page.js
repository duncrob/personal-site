'use client';
import SplitType from "split-type"
import Experience from "../components/Experience"
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    let text = SplitType.create('.name-text');
    let characters = document.querySelectorAll('.char');

    for(let i=0; i<characters.length; i++) {
      characters[i].classList.add('translate-y-full');
    }

    document.querySelector('.name-text').classList.remove('invisible');
    document.querySelector('.name-text').classList.remove('invisible');

    gsap.to('.char', {
      y: -3,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5
    });
  }, [])

  return (
    <div className='relative'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between max-h-screen'>
            <div>
              <h1 className='name-text text-4xl font-bold invisible' style={{'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>Duncan Krey</h1>
              <h2 className='mt-3 text-lg font-medium'>Frontend Developer</h2>
              <p className='max-w-xs mt-4'>I am passionate about web experiences that empower the user.</p>
              <nav className='nav lg:block' aria-label='In-page jump links'>
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
            <li>Link</li>
            </ul>
          </header>
          <main id='content' className='lg:py-24 lg:w-1/2'>
            <section id='about' className='lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
              <p className='mb-4'>
                Hello! I&apos;m Duncan, a senior at the University of Washington. I am currently in the Informatics program as an aspiring front-end developer. I am passionate about design that empowers the user.
              </p>
              <p className='mb-4'>
                My recent experience has been working on websites for various organizations at UW. In my off time, I love enjoying coffee and going snowboarding.
              </p>
            </section>
            <section id='experience' className='mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24' aria-label='Experiences'>
              <ol className="group/list">
                <Experience />
                <Experience />
                <Experience />
                <Experience />
              </ol>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
