

// File: components/HomeSection.js
import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function HomeSection() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const translateY = -offset * 0.2;
  const translateYH1 = -offset * 0.2;   // rýchlejší posun pre h1
  const translateYH2 = -offset * 0.2;   // ešte rýchlejší posun pre h2
  const translateYButton = -offset * 0.2;   // ešte rýchlejší posun pre Button

  return (
    <section
      // style={{ transform: `translateY(${translateY}px)` }}
      className="bg-homesection inset-0 flex flex-col items-center justify-start text-center pt-20 z-0 px-4 sm:px-6 lg:px-20 h-[90vh] sm:h-screen">
        {/* <Image
          src="/assets/images/puknutevesmirnesklo.png"
          alt="Pozadie"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="z-[-1] opacity-100"
          priority // (alebo pre "above the fold" sekciu)
        /> */}
      <div style={{ transform: `translateY(${translateY}px)` }}
          className="mb-0 pt-20">
        <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
          <Image
            src="/assets/images/mm-logo-final-v1.png"
            alt="MyMultiverse Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <h1 style={{ transform: `translateY(${translateY}px)` }}
          className="text-4xl tracking-widest text-shadow-white sm:text-5xl lg:text-5xl font-extrabold -mt-10 mb-2 "
      >
        MY MULTIVERSE
      </h1>
      <h2 style={{ transform: `translateY(${translateY}px)` }}
          className="mt-0 mb-1 text-2xl sm:text-3xl md:text-3xl font-bold text-white text-shadow-black"
      >
        3D Návrhy a tlač na mieru
      </h2>
      <Link href="/gallery" passHref>
        <button style={{ transform: `translateY(${translateY}px)` }}
          className="mt-6 px-6 py-3 bgpurple text-white rounded-md shadow-md button-glow will-change-transform">
          Pozrieť galériu
        </button>
      </Link>
    </section>
  );
}


