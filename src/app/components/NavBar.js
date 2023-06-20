import { useEffect, useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition"

export default function NavBar({ experienceHeight }) {
    const baseNavClasses = "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none";
    let [aboutClasses, setAboutClasses] = useState(baseNavClasses);
    let [experienceClasses, setExperienceClasses] = useState(baseNavClasses);
    let [projectClasses, setProjectClasses] = useState(baseNavClasses);

    let [experienceYPos, setExperienceYPos] = useState(0);

    let experiencePosY = 0, projectsPosY

    useEffect(() => {
        setExperienceYPos(document.getElementById('experience').offsetTop);
        console.log(experienceYPos);

        setAboutClasses(
            classNames(
                scrollPosition > experiencePosY ? 'w-16 bg-slate-200' : 'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none'
            )
        )

        console.log(experienceHeight)
    }, [])

    const scrollPosition = useScrollPosition();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <nav className='nav hidden lg:block' aria-label='In-page jump links'>
            <ul className='mt-16 w-max'>
                <li>
                    <a className='group flex items-center py-3' href='#about'>
                        <span className={
                            classNames(
                                scrollPosition < experienceHeight ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px transition-all motion-reduce:transition-none'
                            )
                        }></span>
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
    )
}