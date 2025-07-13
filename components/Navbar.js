// File: components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: '3D Produkty', href: '/produkty' },
  { label: 'Galéria', href: '/gallery' },
  { label: 'o MM', href: '/aboutmm' },
  { label: 'Kontakt', href: '/kontakt' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-40
    bg-[rgba(105,105,105,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px]
    border-b-2 border-[#111111] transition-all duration-300 ${scrolled ? 'py-[14px]' : 'py-[10px]'}`;
  const ulClass  = `flex space-x-8 ml-auto transition-transform duration-300 ${scrolled ? '-translate-x-[5%]' : ''}`;

  return (
    <nav className={navClass}>
      <div className="flex items-center px-6">
        <div className="mr-4">
          <Image
            src="/assets/images/mm-logo-final-v1.png"
            alt="MyMultiverse Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <ul className={ulClass}>
          {navItems.map(({ label, href }) => (
            <li key={href} className="group relative">
              <Link href={href}>
                <span className="relative text-white text-shadow-black font-medium">
                  {label}
                  <span className="absolute bottom-[-3px] left-0 h-0.5 bg-accent w-0
                    group-hover:w-[115%] transition-all duration-[1000ms] origin-left" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}