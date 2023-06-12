import {FiArrowUpRight} from "react-icons/fi";

export default function Project({ project }) {
    return (
        <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" ></div>
                <div className="z-10 sm:order-2 sm:col-span-6" >
                    <h3>
                        <a href={project.url} target="_blank" rel="noreferrer" aria-label={project.title} className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base" >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" ></span>
                            <span>
                                {project.title}
                                <span className="inline-block">
                                    <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                </span>
                            </span>
                        </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal" >{project.desc}</p>
                </div>
                <img src={"/img/" + project.imgsrc} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" />
            </div>
        </li>
    )
}