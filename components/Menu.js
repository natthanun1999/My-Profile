import {
  ChevronLeftIcon
} from '@heroicons/react/solid'
import {
  HomeIcon,
  BookOpenIcon,
  UserCircleIcon,
  PhoneIcon,
  XCircleIcon
} from '@heroicons/react/outline'

function Menu({ menuOpen, onSetMenuOpen }) {
  const toggleMenu = () => {
    onSetMenuOpen(!menuOpen)
  }

  return (
    <div className="z-50 absolute right-0 flex flex-row p-2">
      <div className="bg-base-100 rounded-md w-40">
        <ul className="menu overflow-y-auto text-base-content">
          <li>
            <a className="rounded-md">
              <HomeIcon className="w-5 h-5 mr-2" /> Home
            </a>
          </li>
          <li>
            <a className="rounded-md">
              <BookOpenIcon className="w-5 h-5 mr-2" /> Projects
            </a>
          </li>
          <li>
            <a className="rounded-md">
              <PhoneIcon className="w-5 h-5 mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-square btn-ghost">
        <XCircleIcon className="h-5 w-5" onClick={toggleMenu} />
      </button>
    </div>
  )
}

export default Menu
