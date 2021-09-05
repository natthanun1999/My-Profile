import { MenuIcon } from '@heroicons/react/solid'

function Navbar({ menuOpen, onSetMenuOpen }) {
  const toggleMenu = () => {
    onSetMenuOpen(!menuOpen)
  }

  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">
          My Profile
        </span>
      </div> 
      <div className="hidden px-2 mx-2 navbar-end lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            Projects
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            Contact
          </a>
        </div>
      </div> 
      { !menuOpen &&
        <div className="navbar-end lg:hidden">  
          <button
            className="btn btn-square btn-ghost">
            <MenuIcon className="h-5 w-5" onClick={toggleMenu} />
          </button>
        </div> }
    </div>
  )
}

export default Navbar
