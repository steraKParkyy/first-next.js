// // File: components/Navbar.js
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: '3D Produkty', href: '/produkty' },
//   { label: 'Galéria', href: '/gallery' },
//   { label: 'o MM', href: '/aboutmm' },
//   { label: 'Kontakt', href: '/kontakt' }
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 100);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const navClass = `fixed top-0 w-full z-40
//     bg-[rgba(105,105,105,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px]
//     border-b-2 border-[#111111] transition-all duration-300 ${scrolled ? 'py-[14px]' : 'py-[10px]'}`;
//   const ulClass  = `flex space-x-8 ml-auto transition-transform duration-300 ${scrolled ? '-translate-x-[5%]' : ''}`;

//   return (
//     <nav className={navClass}>
//       <div className="flex items-center px-6">
//         <div className="mr-4">
//           <Image
//             src="/assets/images/mm-logo-final-v1.png"
//             alt="MyMultiverse Logo"
//             width={40}
//             height={40}
//             className="object-contain"
//           />
//         </div>
//         <ul className={ulClass}>
//           {navItems.map(({ label, href }) => (
//             <li key={href} className="group relative">
//               <Link href={href}>
//                 <span className="relative text-white text-shadow-black font-medium">
//                   {label}
//                   <span className="absolute bottom-[-3px] left-0 h-0.5 bg-accent w-0
//                     group-hover:w-[115%] transition-all duration-[1000ms] origin-left" />
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// File: components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "3D Produkty", href: "/produkty" },
  { label: "Galéria", href: "/gallery" },
  { label: "o MM", href: "/aboutmm" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // zavri mobilné menu pri zmene route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const navClass = `
    fixed top-0 w-full z-40 transition-all duration-300
    bg-[rgba(105,105,105,0.10)] backdrop-blur-[10px]
    shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b-2 border-[#111111]
    ${scrolled ? "py-[14px]" : "py-[10px]"}
  `;

  return (
    <nav className={navClass} role="navigation" aria-label="Hlavná navigácia">
      <div className="mx-auto flex items-center gap-4 px-4 sm:px-6 max-w-7xl">
        <Link href="/" className="flex items-center gap-2" aria-label="Domov">
          <Image
            src="/assets/images/mm-logo-final-v1.png"
            alt="MyMultiverse Logo"
            width={40}
            height={40}
            priority
            className="object-contain"
            sizes="40px"
          />
        </Link>

        {/* Desktop menu */}
        <ul
          className={`ml-auto hidden md:flex items-center gap-8 transition-transform duration-300 motion-reduce:duration-0 ${
            scrolled ? "-translate-x-[5%]" : ""
          }`}
        >
          {navItems.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={href} className="group relative">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative font-medium text-shadow-black outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded
                    ${active ? "text-accent" : "text-white"}`}
                >
                  {label}
                  <span
                    className="absolute bottom-[-3px] left-0 h-0.5 bg-accent w-0
                      group-hover:w-[115%] transition-all duration-[900ms] motion-reduce:duration-0 origin-left"
                  />
                </Link>


              </li>
            );
          })}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20 backdrop-blur hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Zobraziť menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 motion-reduce:duration-0 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 pb-4 pt-2 space-y-2">
          {navItems.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded px-3 py-2 font-medium text-white text-shadow-black outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                    ${active ? "bg-white/10" : "hover:bg-white/10"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
