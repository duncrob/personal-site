import Project from "./Project"
import projects from "../../../public/projects.json"
import { useRef, useEffect } from "react";

export default function Projects({ setProjectsHeight }) {
  const elementRef = useRef(null);

  useEffect(() => {
    setProjectsHeight(elementRef.current.offsetTop);
  }, [elementRef, setProjectsHeight])

  function renderProjects() {
    return projects.map((project) => {
      return <Project key={project.title} project={project} />
    })
  }

  return (
    <section id="projects" ref={elementRef} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list" >
          {renderProjects()}
        </ul>
      </div>
    </section>
  )
}