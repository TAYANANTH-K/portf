import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Certifications', link: '#certifications' },
    { name: 'Resume', link: '#resume' },
    { name: 'Contact', link: '#contact' },
  ];

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setToggleMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed w-full bg-primary z-50 shadow-md">
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        <a href="#" className="font-bold text-xl text-black">TAYANANTH K</a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-black">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
          <Bars3Icon className="text-white h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {toggleMenu && (
        <nav className="md:hidden bg-primary px-5 py-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={() => setToggleMenu(false)}
                  className="hover:text-black"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
