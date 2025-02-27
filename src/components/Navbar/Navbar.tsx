import { useState } from 'react';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  
  const handleNavbar = () => setIsNavbarOpen(!isNavbarOpen)

  const IconMenuDeep = () => {
    return (
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 6h16" />
        <path d="M7 12h13" />
        <path d="M10 18h10" />
      </svg>
    )
  }

  const IconX = () => {
    return (
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    )
  }
  
  const navigation = [
    { href: "#hello", name: "Hello" },
    { href: "#skills", name: "Skills" },
    { href: "#projects", name: "Projects" },
    { href: "#experiences", name: "Experiences" }
  ]

  return (
    <div className="sticky top-15 flex justify-end mx-10 sm:mx-20">
      <button
        role='button'
        onClick={handleNavbar} 
        className="bg-white absolute border-2 border-gray-200 rounded-full p-4 cursor-pointer transition duration-300 z-100 hover:text-white hover:bg-black hover:border-black"
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

    </div>
  );
}