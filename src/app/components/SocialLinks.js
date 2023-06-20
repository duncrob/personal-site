import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <ul className='ml-1 mt-8 flex items-center' aria-label='Social Media'>
      <li className="mr-5 text-xs" key="github">
          <a href="https://github.com/duncrob" target="_blank" rel="noreferrer" className="block hover:text-slate-200">
            <span className="sr-only">Github</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
          </a>
        </li>
        <li className="mr-5 text-xs" key="instagram">
          <a href="https://www.instagram.com/duncan.krey/" target="_blank" rel="noreferrer" className="block hover:text-slate-200">
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faInstagram} />
          </a>
        </li>
        <li className="mr-5 text-xs" key="linkedin">
          <a href="https://www.linkedin.com/in/duncan-krey/" target="_blank" rel="noreferrer" className="block hover:text-slate-200">
            <span className="sr-only">LinkedIn</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
          </a>
        </li>
    </ul>
  )
}