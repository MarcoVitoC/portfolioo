import { useEffect, useState } from 'react';

export default function Navbar() {
  const navigation = [
    { href: "#hello", name: "Hello" },
    { href: "#skills", name: "Skills" },
    { href: "#projects", name: "Projects" },
    { href: "#experiences", name: "Experiences" }
  ]

  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const [isInDarkMode, setIsInDarkMode] = useState<boolean>(false)
  
  const handleNavbar = () => setIsNavbarOpen(!isNavbarOpen)
  const handleDarkToggle = () => setIsInDarkMode(!isInDarkMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isInDarkMode)
  }, [isInDarkMode])

  const IconMenuDeep = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 6h16" />
        <path d="M7 12h13" />
        <path d="M10 18h10" />
      </svg>
    )
  }

  const IconX = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    )
  }

  const IconMoon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-moon">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    )
  }

  const IconSun = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sun">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
    )
  }

  return (
    <div className="sticky top-15 flex justify-end mx-10 sm:mx-20 dark:text-white">
      <button
        role='button'
        onClick={handleNavbar} 
        className="bg-white absolute border-2 border-gray-200 rounded-full p-4 cursor-pointer transition duration-300 z-100 hover:text-white hover:bg-black hover:border-black dark:bg-slate-950 dark:hover:bg-white dark:hover:text-black"
        aria-label='navbar'
      >
        {isNavbarOpen ? <IconX /> : <IconMenuDeep />}
      </button>

      {isNavbarOpen && (
        <div className="fixed inset-0 z-50 w-full h-full backdrop-blur-md">
          <div className="mt-32">
            <div className="text-right space-y-8 px-10 py-10 sm:px-20">
              {navigation.map(({href, name}) => (
                <a 
                onClick={handleNavbar} 
                href={href} 
                className="block rounded-lg px-6 py-2 text-3xl sm:text-6xl font-semibold tracking-wide transition duration-300 hover:-translate-x-5 hover:after:content-['👈']"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        role='button'
        onClick={handleDarkToggle} 
        className="bg-white absolute border-2 border-gray-200 rounded-full mt-20 p-4 cursor-pointer transition duration-300 hover:text-white hover:bg-black hover:border-black dark:bg-slate-950 dark:hover:bg-white dark:hover:text-black"
        aria-label='navbar'
      >
        {isInDarkMode ? <IconSun /> : <IconMoon />}
      </button>

    </div>
  );
}