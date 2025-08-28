
// import Image from 'next/image'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'

// export default function GalleryHome() {
//   // Pole objektov s dvomi URL
//   const images = Array.from({ length: 8 }, (_, i) => ({
//     thumb: `/assets/imghomepagegallery/nahlad/IMG${i + 1}.jpg`,
//     original: `/assets/imghomepagegallery/original/IMG${i + 1}.jpg`
//   }))

//   const [isOpen, setIsOpen] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape' && isOpen) {
//         setIsOpen(false)
//       }
//     }
//     window.addEventListener('keydown', handleKeyDown)
//     return () => window.removeEventListener('keydown', handleKeyDown)
//   }, [isOpen])

//   const openSlider = (index) => {
//     setCurrentIndex(index)
//     setIsOpen(true)
//   }

//   const prevImage = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length)
//   }

//   const nextImage = () => {
//     setCurrentIndex((currentIndex + 1) % images.length)
//   }

//   return (
//     <section className="bgdeepspace py-10 sm:px-6 lg:px-20 justify-items-center relative">
//       <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
//         <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
//           <path
//             fill="#434343" // alebo zmeň na tvoju bg farbu!
//             d="M0,64L60,69.3C120,75,240,85,360,96C480,107,600,117,720,106.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
//           />
//         </svg>
//       </div>
//       <h2 className="text-3xl font-bold text-white text-shadow-white text-center mb-14 mt-4">
//         Galéria
//       </h2>
//       <div className="grid grid-cols-4 gap-2 max-w-[800px] mx-auto justify-items-center">
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className="relative w-[200px] h-[200px] cursor-pointer"
//             onClick={() => openSlider(idx)}
//           >
//             {/* <Image
//               src={img.thumb}
//               alt={`Galéria obrázok ${idx + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-300 hover:scale-105 rounded-lg"
//               loading="lazy"
//             /> */}

//             {/* V Next.js 13 bola zmenená implementácia komponentu Image. 
//             Staré props ako layout a objectFit sú už zastarané a treba ich nahradiť novými vlastnosťami (napr. style s CSS vlastnosťami). */}
//             <Image
//             src={img.thumb}
//             alt={`Galéria obrázok ${idx + 1}`}
//             fill
//             style={{ objectFit: 'cover' }}
//             className="relative transition-transform duration-300 hover:scale-105 rounded-lg z-50"
//             loading="lazy"
//           />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-14">
//   <Link href="/gallery" passHref>
//     <button
//       className="px-6 py-3 bgpurple text-white rounded-md shadow-md button-glow will-change-transform">
//       Pozrieť celú galériu
//     </button>
//   </Link>
// </div>


//         {/* light box + slider */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
//           {/* Zatvárací krížik */}
//           <button
//             onClick={() => setIsOpen(false)}
//             aria-label="Zatvoriť galériu"
//             className="absolute top-20 right-4 text-white text-3xl font-bold hover:text-accent transition"
//           >
//             &times;
//           </button>

//           {/* Šípka vľavo */}
//           <button
//             onClick={prevImage}
//             aria-label="Predchádzajúci obrázok"
//             className="absolute left-20 text-white text-4xl font-bold hover:text-accent transition select-none"
//           >
//             &#8249;
//           </button>

//           {/* Aktuálny obrázok */}
//           <div className="relative w-[80vw] max-w-[900px] h-[80vh] sm:h-[70vh]">
//             <Image
//               src={images[currentIndex].original}
//               alt={`Galéria obrázok ${currentIndex + 1}`}
//               layout="fill"
//               objectFit="contain"
//               priority={true}
//             />
//           </div>

//           {/* Šípka vpravo */}
//           <button
//             onClick={nextImage}
//             aria-label="Nasledujúci obrázok"
//             className="absolute right-20 text-white text-4xl font-bold hover:text-accent transition select-none"
//           >
//             &#8250;
//           </button>
//         </div>
//       )}

//     </section>
//   )
// }

// File: components/GalleryHome.js
"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// 1) Zdroj dát mimo renderu (stabilná referencia)
const IMAGES = Array.from({ length: 8 }, (_, i) => ({
  thumb: `/assets/imghomepagegallery/nahlad/IMG${i + 1}.jpg`,
  original: `/assets/imghomepagegallery/original/IMG${i + 1}.jpg`,
}));

export default function GalleryHome() {
  const images = IMAGES; // prípadne neskôr nahradíš fetchom

  // 2) Lightbox stav
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3) Po otvorení lightboxu nastav focus na Close a pridaj key handling (ESC, ← →, Tab)
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  const openSlider = useCallback((index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((idx) => (idx - 1 + images.length) % images.length);
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((idx) => (idx + 1) % images.length);
  }, [images.length]);

  // 4) Preload susedných obrázkov pre rýchlejšie prepínanie
  useEffect(() => {
    if (!isOpen) return;
    const next = new window.Image();
    next.src = images[(currentIndex + 1) % images.length].original;
    const prev = new window.Image();
    prev.src = images[(currentIndex - 1 + images.length) % images.length].original;
  }, [isOpen, currentIndex, images]);

  // 5) Klávesnica v lightboxe
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Tab" && dialogRef.current) {
        // jednoduchý focus trap: ak focus utečie mimo, vráť na close
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          const active = document.activeElement;
          if (e.shiftKey && active === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, nextImage, prevImage]);

  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus();
  }, [isOpen]);

  // 6) Výpočet sizes pre náhľady (lepší CLS a data usage)
  const thumbSizes = useMemo(
    () => "(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 200px",
    []
  );

  return (
    <section className="bgdeepspace py-10 sm:px-6 lg:px-20 justify-items-center relative">
      {/* horná vlna */}
      <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
        <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
          <path
            fill="#434343"
            d="M0,64L60,69.3C120,75,240,85,360,96C480,107,600,117,720,106.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          />
        </svg>
      </div>

      <h2 className="text-3xl font-bold text-white text-shadow-white text-center mb-14 mt-4">
        Galéria
      </h2>

      {/* Grid: responzívne, bez CLS (aspect-square) */}
      <div
        role="list"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-[1000px] w-full mx-auto px-4 sm:px-6"
      >
        {images.map((img, idx) => (
          <div key={idx} role="listitem" className="w-full">
            <button
              type="button"
              onClick={() => openSlider(idx)}
              className="relative block w-full aspect-[1/1] overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label={`Otvoriť obrázok ${idx + 1} v lightboxe`}
            >
              <NextImage
                src={img.thumb}
                alt={`Galéria obrázok ${idx + 1}`}
                fill
                sizes={thumbSizes}
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
                loading={idx < 4 ? "eager" : "lazy"}
                priority={idx < 2}
              />
            </button>
          </div>
        ))}
      </div>

      {/* CTA do plnej galérie */}
      <div className="flex justify-center mt-14">
        <Link
          href="/gallery"
          className="px-6 py-3 bgpurple text-white rounded-md shadow-md button-glow will-change-transform"
        >
          Pozrieť celú galériu
        </Link>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Prehliadač obrázkov"
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          {/* Close */}
          <button
            ref={closeBtnRef}
            onClick={() => setIsOpen(false)}
            aria-label="Zatvoriť galériu"
            className="absolute top-6 right-4 text-white text-3xl font-bold hover:text-accent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            aria-label="Predchádzajúci obrázok"
            className="absolute left-6 md:left-12 text-white text-4xl font-bold hover:text-accent transition select-none"
          >
            &#8249;
          </button>

          {/* Obrázok */}
          <div className="relative w-[92vw] max-w-[1000px] h-[76vh] md:h-[80vh]">
            <NextImage
              src={images[currentIndex].original}
              alt={`Galéria obrázok ${currentIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 92vw, 1000px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            aria-label="Nasledujúci obrázok"
            className="absolute right-6 md:right-12 text-white text-4xl font-bold hover:text-accent transition select-none"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
