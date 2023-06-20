import { useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition"

export default function NavBar() {
    let experiencePosY = 0, projectsPosY
    
    useEffect(() => {
        experiencePosY = document.getElementById('experience').offsetTop;
        console.log(experiencePosY);
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
                        <span 
                            className={classNames(
                                scrollPosition < experiencePosY ? 'w-16 bg-slate-200' : 'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none'
                            )}
                        ></span>
                        <span 
                            className={classNames(
                                scrollPosition < experiencePosY ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                'nav-text text-xs font-bold uppercase tracking-widest'
                            )}
                        >About</span>
                    </a>
                </li>
                <li>
                    <a className='group flex items-center py-3' href='#experience'>
                        <span className={
                            classNames(
                                scrollPosition >= experiencePosY ? 'w-16 bg-slate-200' : 'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none'
                            )}
                        ></span>
                        <span 
                            className={classNames(
                                scrollPosition >= experiencePosY ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                'nav-text text-xs font-bold uppercase tracking-widest'
                            )}
                        >Experience</span>
                    </a>
                </li>
                <li>
                    <a className='group flex items-center py-3' href='#projects'>
                        <span className={
                            classNames(
                                scrollPosition < 410 ? 'w-16 bg-slate-200' : 'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none'
                            )}
                        ></span>
                        <span 
                            className={classNames(
                                scrollPosition < 410 ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                'nav-text text-xs font-bold uppercase tracking-widest'
                            )}
                        >Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}