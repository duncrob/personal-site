import { useEffect } from "react"
import NavBar from "./NavBar"
import SocialLinks from "./SocialLinks"
import { gsap } from "gsap";
import SplitType from "split-type"

export default function Directory({ experienceHeight, projectsHeight }) {
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

  return (
    <header className='lg:py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between max-h-screen'>
      <div>
        <h1 className='name-text text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl invisible' style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
          <a href="/" >Duncan Krey</a>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Frontend Developer</h2>
        <p className='max-w-xs mt-4'>I am passionate about web experiences that empower the user.</p>
        <NavBar experienceHeight={experienceHeight} projectsHeight={projectsHeight} />
      </div>
      <SocialLinks />
    </header>
  )
}