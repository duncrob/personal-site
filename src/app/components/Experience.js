import {FiArrowUpRight} from "react-icons/fi";

export default function Experience({ experience }) {
    const technologies = [
        "React",
        "React Native",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "Node.js"
    ]
    
    function renderTechnologies() {
        return experience.technologies.map((tech) => {
            return (
                <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
                        {tech}
                    </div>
                </li>
            )
        })
    }

    return (
        <li className="mb-12">
            <div className="group relative grid grid-cols-8 gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="col-span-2 text-xs mt-1 font-semibold uppercase text-slate-500 z-10">{experience.start} - {experience.end}</header>
                <div className="col-span-6 z-10">
                    <h3 className="text-medium leading-snug text-slate-200">
                        <div>
                            <a href="" target="_blank" rel="noreferrer" aria-label={experience.position + " at " + experience.company} className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                    {experience.position + " · "}
                                    <span className="inline-block">
                                        {experience.company}<FiArrowUpRight />
                                    </span>
                                </span>
                            </a>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">{experience.desc}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {renderTechnologies()}
                    </ul>
                </div>
            </div>
        </li>
    )
}