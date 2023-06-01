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

    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5
    });
  }, [])

  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className='lg:py-24'>
          <h1 className='name-text text-4xl font-bold invisible' style={{'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>Duncan Krey</h1>
          <h2 className='mt-3 text-lg font-medium'>Frontend Developer</h2>
          <p className='max-w-xs mt-4'>I am passionate about web experiences that empower the user.</p>
        </header>
        <main id='content' className='lg:py-24 lg:w-1/2 '>
          <section id='about' className='lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
            <p className='mb-4'>
              Hello! I'm Duncan, a senior at the University of Washington. I am currently in the Informatics program as an aspiring front-end developer. I am passionate about design that empowers the user.
            </p>
            <p className='mb-4'>
              My recent experience has been working on websites for various organizations at UW. In my off time, I love enjoying coffee and going snowboarding.
            </p>
          </section>
          <section id='experience'>
            <ol className="group/list">
              <Experience />
              <Experience />
            </ol>
          </section>
        </main>
      </div>
    </div>
  )
}
