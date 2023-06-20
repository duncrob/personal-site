import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Experience from './Experience'
import experiences from "../../../public/experiences.json"
import { useEffect, useRef } from 'react';

export default function Experiences({ setExperienceHeight }) {
  const elementRef = useRef(null);

  useEffect(() => {
    setExperienceHeight(elementRef.current.offsetTop);
  }, [elementRef, setExperienceHeight])

  function renderExperiences() {
    return experiences.map((experience) => {
      return <Experience key={experience.company} experience={experience} />
    })
  }

  return (
    <section id='experience' ref={elementRef} className='mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24' aria-label='Experiences'>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
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
      </div>
    </section>
  )
}