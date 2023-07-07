import { useScrollPosition } from "../hooks/useScrollPosition"

export default function NavBar({ experienceHeight, projectsHeight }) {
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
                                scrollPosition < experienceHeight - 100 ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px transition-all motion-reduce:transition-none'
                            )
                        }></span>
                        <span className={
                            classNames(
                                scrollPosition < experienceHeight - 100 ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                'nav-text text-xs font-bold uppercase tracking-widest'
                            )
                        }>About</span>
                    </a>
                </li>
                <li>
                    <a className='group flex items-center py-3' href='#experience'>
                    <span className={
                            classNames(
                                scrollPosition >= experienceHeight - 100 && scrollPosition < projectsHeight - 500 ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px transition-all motion-reduce:transition-none'
                            )
                        }></span>
                        <span className={
                            classNames(
                                scrollPosition >= experienceHeight - 100 && scrollPosition < projectsHeight - 500 ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                'nav-text text-xs font-bold uppercase tracking-widest'
                            )
                        }>Experience</span>
                    </a>
                </li>
                <li>
                    <a className='group flex items-center py-3' href='#projects'>
                    <span className={
                            classNames(
                                scrollPosition >= projectsHeight - 500  ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200',
                                'nav-indicator mr-4 h-px transition-all motion-reduce:transition-none'
                            )
                        }></span>
                        <span className={
                            classNames(
                                scrollPosition >= projectsHeight - 500 ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
                                'nav-text text-xs font-bold uppercase tracking-widest'
                            )
                        }>Projects</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}