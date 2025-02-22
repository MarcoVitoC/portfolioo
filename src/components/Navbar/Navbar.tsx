import { IconMenuDeep, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const handleNavbar = () => setIsNavbarOpen(!isNavbarOpen)
  
  const navigation = [
    { href: "#hello", name: "Hello" },
    // { href: "#skills", name: "Skills" },
    { href: "#projects", name: "Projects" },
    // { href: "#experiences", name: "Experiences" }
  ]

  return (
    <div className="sticky top-15 flex justify-end mx-10 sm:mx-20">
      <button 
        onClick={handleNavbar} 
        className="bg-white absolute border-2 border-gray-200 rounded-full p-4 cursor-pointer transition duration-300 z-100 hover:text-white hover:bg-black hover:border-black"
      >
        {isNavbarOpen ? <IconX /> : <IconMenuDeep />}
      </button>

      {isNavbarOpen && (
        <div className="fixed right-0 z-50 w-full h-full backdrop-blur-md">
          <div className="mt-32">
            <div className="text-right space-y-8 px-10 py-10 sm:px-20">
              {navigation.map(({href, name}) => (
                <a 
                onClick={handleNavbar} 
                href={href} 
                className="block rounded-lg px-6 py-2 text-3xl sm:text-6xl font-semibold transition duration-300 hover:text-white hover:bg-black"
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