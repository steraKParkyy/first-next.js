// // File: components/ThreeDSection.js
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ThreeDSection() {
//   const itemsSet1 = [
//     {
//       title: 'Držiaky na okuliare',
//       href: '/3d-produkty',
//       description: 'Originálny držiak na okuliare',
//       image: '/assets/images/glassesholder.png',
//       imgWidth: 200,
//       imgHeight: 160
//     },
//     {
//       title: 'Personalizované misky',
//       href: '/3d-produkty',
//       description: 'Personalizované misky pre domácich maznáčikov',
//       image: '/assets/images/argomiska.png',
//       imgWidth: 250,
//       imgHeight: 180
//     },
//     {
//       title: 'Personalizované misky',
//       href: '/3d-produkty',
//       description: 'Personalizované misky pre domácich maznáčikov',
//       image: '/assets/images/argomiska.png',
//       imgWidth: 250,
//       imgHeight: 180
//     }
//   ];

//   const itemsSet2 = [
//     {
//       title: 'Držiaky na perá',
//       href: '/3d-produkty',
//       description: 'Originálny držiak na perá',
//       image: '/assets/images/penholder.png',
//       imgWidth: 200,
//       imgHeight: 160
//     },
//     {
//       title: 'Držiaky na slúchadlá',
//       href: '/3d-produkty',
//       description: 'Praktické držiaky na vaše slúchadlá',
//       image: '/assets/images/headsetholder.png',
//       imgWidth: 220,
//       imgHeight: 160
//     },
//     {
//       title: 'Držiaky na slúchadlá',
//       href: '/3d-produkty',
//       description: 'Praktické držiaky na vaše slúchadlá',
//       image: '/assets/images/headsetholder.png',
//       imgWidth: 220,
//       imgHeight: 160
//     }
//   ];

//   // For seamless looping, include the first set again
//   const groups = [itemsSet1, itemsSet2, itemsSet1];

//   return (
//     <section className="bgdeepspace py-6 pb-20 sm:px-6 lg:px-20 relative">
//       <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
//         <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
//           <path
//             fill="#434343"
//             d="M0,70 Q360,130 720,70 Q1080,10 1440,70 L1440,0 L0,0Z"
//           />
//         </svg>
//       </div>


//       <h2 className="text-3xl font-bold text-white text-shadow-white text-center mb-14 mt-4">Zaujímavé produkty</h2>
//       <div className="overflow-hidden relative">
//         <div className="flex w-[300%] animate-carousel">
//           {groups.map((set, idx) => (
//             <div key={idx} className="flex w-1/3 justify-center gap-14">
//               {set.map(item => (
//                 <Link
//                   key={`${item.title}-${idx}`}
//                   href={item.href}
//                   className="group w-[350px] h-[300px] bg-[rgba(105,105,105,0.1)] backdrop-blur-[10px] p-6 rounded-lg flex flex-col items-center text-center justify-between transition-shadow duration-300]"
//                 >
//                   <div
//                     className="relative mb-4"
//                     style={{ width: item.imgWidth, height: item.imgHeight }}
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.alt}
//                       layout="fill"
//                       objectFit="contain"
//                       className="rounded-md"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 break-words">
//                     {item.title}
//                   </h3>
//                   {/* <p className="text-sm text-white break-words">
//                     {item.description}
//                   </p> */}
//                 </Link>
//               ))}
//             </div>
//           ))}
//         </div>
//         <style jsx>{`
//           @keyframes carousel {
//             0%, 40% { transform: translateX(0); }
//             50%, 90% { transform: translateX(-33.333%); }
//             100% { transform: translateX(-66.666%); }
//           }
//           .animate-carousel {
//             animation: carousel 7s ease-in-out infinite;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }


// File: components/ThreeDSection.js
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ThreeDSection() {
//   const itemsSet1 = [
//     {
//       title: 'Držiaky na okuliare',
//       href: '/3d-produkty',
//       description: 'Originálny držiak na okuliare',
//       image: '/assets/images/glassesholder.png',
//       imgWidth: 200,
//       imgHeight: 160
//     },
//     {
//       title: 'Personalizované misky',
//       href: '/3d-produkty',
//       description: 'Personalizované misky pre domácich maznáčikov',
//       image: '/assets/images/argomiska.png',
//       imgWidth: 250,
//       imgHeight: 180
//     },
//     {
//       title: 'Personalizované misky',
//       href: '/3d-produkty',
//       description: 'Personalizované misky pre domácich maznáčikov',
//       image: '/assets/images/argomiska.png',
//       imgWidth: 250,
//       imgHeight: 180
//     }
//   ];

//   const itemsSet2 = [
//     {
//       title: 'Držiaky na perá',
//       href: '/3d-produkty',
//       description: 'Originálny držiak na perá',
//       image: '/assets/images/penholder.png',
//       imgWidth: 200,
//       imgHeight: 160
//     },
//     {
//       title: 'Držiaky na slúchadlá',
//       href: '/3d-produkty',
//       description: 'Praktické držiaky na vaše slúchadlá',
//       image: '/assets/images/headsetholder.png',
//       imgWidth: 220,
//       imgHeight: 160
//     },
//     {
//       title: 'Držiaky na slúchadlá',
//       href: '/3d-produkty',
//       description: 'Praktické držiaky na vaše slúchadlá',
//       image: '/assets/images/headsetholder.png',
//       imgWidth: 220,
//       imgHeight: 160
//     }
//   ];

//   // Pre plynulú slučku pridáme sady v poradí: 1 → 2 → 1
//   const groups = [itemsSet1, itemsSet2, itemsSet1];

//   return (
//     <section className="bgdeepspace py-6 pb-20 sm:px-6 lg:px-20 relative">
//       <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
//         <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
//           <path fill="#434343" d="M0,70 Q360,130 720,70 Q1080,10 1440,70 L1440,0 L0,0Z" />
//         </svg>
//       </div>

//       <h2 className="text-3xl font-bold text-white text-shadow-white text-center mb-14 mt-4">Zaujímavé produkty</h2>

//       {/* ROOT pre hover pauzu */}
//       <div className="overflow-hidden relative carousel-root" role="region" aria-label="Karusel produktov">
//         <div className="flex w-[300%] animate-carousel" aria-live="polite">
//           {groups.map((set, idx) => (
//             <div key={`group-${idx}`} className="flex w-1/3 justify-center gap-14">
//               {set.map((item, i) => (
//                 <Link
//                   key={`card-${idx}-${i}`}
//                   href={item.href}
//                   aria-label={`${item.title} – pozrieť detaily`}
//                   className="group w-[350px] h-[300px] bg-[rgba(105,105,105,0.1)] backdrop-blur-[10px] p-6 rounded-lg flex flex-col items-center text-center justify-between transition-shadow duration-300 hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30"
//                 >
//                   <div
//                     className="relative mb-4"
//                     style={{ width: item.imgWidth, height: item.imgHeight }}
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       sizes="(min-width: 1024px) 350px, 60vw"
//                       style={{ objectFit: 'contain' }}
//                       className="rounded-md"
//                       priority={idx === 0 && i === 0}
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 break-words">
//                     {item.title}
//                   </h3>
//                   {/* Ak chceš, odkomentuj popis */}
//                   {/* <p className="text-sm text-white/90 break-words">{item.description}</p> */}
//                 </Link>
//               ))}
//             </div>
//           ))}
//         </div>

//         <style jsx>{`
//           @keyframes carousel {
//             0%, 40% { transform: translateX(0); }
//             50%, 90% { transform: translateX(-33.333%); }
//             100% { transform: translateX(-66.666%); }
//           }
//           .animate-carousel {
//             animation: carousel 7s ease-in-out infinite;
//             will-change: transform;
//           }
//           /* Pauza na hover a aj pri klávesovej navigácii (focus-within) */
//           .carousel-root:hover .animate-carousel,
//           .carousel-root:focus-within .animate-carousel {
//             animation-play-state: paused;
//           }
//           /* Preferenčná prístupnosť – redukcia pohybu */
//           @media (prefers-reduced-motion: reduce) {
//             .animate-carousel { animation: none; }
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }


// // File: components/ThreeDSection.js
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ThreeDSection() {
  // ---- Dáta (môžeš neskôr ťahať z CMS) ----
  const itemsSet1 = [
    { title: 'Držiaky na okuliare', href: '/3d-produkty', description: 'Originálny držiak na okuliare', image: '/assets/images/glassesholder.png' },
    { title: 'Personalizované misky', href: '/3d-produkty', description: 'Personalizované misky pre domácich maznáčikov', image: '/assets/images/argomiska.png' },
    { title: 'Držiaky na slúchadlá', href: '/3d-produkty', description: 'Praktické držiaky na vaše slúchadlá', image: '/assets/images/headsetholder.png' }
  ];
  const itemsSet2 = [
    { title: 'Držiaky na perá', href: '/3d-produkty', description: 'Originálny držiak na perá', image: '/assets/images/penholder.png' },
    { title: 'Držiaky na slúchadlá', href: '/3d-produkty', description: 'Praktické držiaky na vaše slúchadlá', image: '/assets/images/headsetholder.png' },
    { title: 'Personalizované misky', href: '/3d-produkty', description: 'Personalizované misky pre domácich maznáčikov', image: '/assets/images/argomiska.png' }
  ];

  // Zlepšenie: pracujeme s jedným zoznamom (poradie je na tebe)
  const items = useMemo(() => [...itemsSet1, ...itemsSet2], []);

  // ---- Responsivita: 3 → 2 → 1 karty podľa šírky ----
  const getSlidesPerPage = () => {
    if (typeof window === 'undefined') return 3; // SSR default
    const w = window.innerWidth;
    if (w < 640) return 1;      // sm-
    if (w < 1024) return 2;     // md
    return 3;                   // lg+
  };

  const [slidesPerPage, setSlidesPerPage] = useState(getSlidesPerPage);
  useEffect(() => {
    const onResize = () => setSlidesPerPage(getSlidesPerPage());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ---- Výpočet strán (stránka = viditeľný set kariet) ----
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += slidesPerPage) {
      result.push(items.slice(i, i + slidesPerPage));
    }
    // ak by posledná stránka mala menej kariet, môžeš ju doplniť "wrapom"
    const last = result[result.length - 1];
    if (last && last.length < slidesPerPage) {
      const need = slidesPerPage - last.length;
      result[result.length - 1] = [...last, ...items.slice(0, need)];
    }
    return result;
  }, [items, slidesPerPage]);

  // ---- Nekonečná slučka: pridáme klon prvej stránky na koniec ----
  const loopPages = useMemo(() => (pages.length ? [...pages, pages[0]] : []), [pages]);

  // ---- Auto-posun, pauza na hover/focus ----
  const [index, setIndex] = useState(0); // index v loopPages
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const durationMs = 4000; // čas medzi posunmi

  // interval pre auto-play
  useEffect(() => {
    if (paused || loopPages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, durationMs);
    return () => clearInterval(id);
  }, [paused, loopPages.length, durationMs]);

  // po skončení prechodu: ak sme na klone, skočíme bez animácie na originál index 0
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handleTransitionEnd = () => {
      if (index === loopPages.length - 1) {
        // vypneme animáciu, skočíme na 0, potom ju v ďalšom ticku zapneme
        el.style.transition = 'none';
        setIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = 'transform 700ms ease-in-out';
          });
        });
      }
    };
    el.addEventListener('transitionend', handleTransitionEnd);
    return () => el.removeEventListener('transitionend', handleTransitionEnd);
  }, [index, loopPages.length]);

  // udrž animáciu zapnutú defaultne
  useEffect(() => {
    const el = trackRef.current;
    if (el) el.style.transition = 'transform 700ms ease-in-out';
  }, []);

  // pomocné: pauza na focus-within (klávesnica)
  const onFocusIn = () => setPaused(true);
  const onFocusOut = () => setPaused(false);

  return (
    <section className="bgdeepspace py-6 pb-20 sm:px-6 lg:px-20 relative">
      {/* Dekoratívna vlna */}
      <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
        <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
          <path fill="#434343" d="M0,70 Q360,130 720,70 Q1080,10 1440,70 L1440,0 L0,0Z" />
        </svg>
      </div>

      <h2 className="text-3xl font-bold text-white text-shadow-white text-center mb-14 mt-4">Zaujímavé produkty</h2>

      <div
        className="overflow-hidden relative"
        role="region"
        aria-label="Karusel produktov"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={onFocusIn}
        onBlur={onFocusOut}
      >
        {/* track */}
        <div
          ref={trackRef}
          className="flex"
          style={{ transform: `translateX(-${index * 100}%)`, willChange: 'transform' }}
          aria-live="polite"
        >
          {loopPages.map((page, pageIdx) => (
            <div key={`page-${pageIdx}`} className="flex-none w-full flex justify-center gap-6 px-2">
              {page.map((item, i) => (
                <Link
                  key={`card-${pageIdx}-${i}-${item.title}`}
                  href={item.href}
                  aria-label={`${item.title} – pozrieť detaily`}
                  className="group w-[350px] max-w-[90vw] h-[300px] bg-[rgba(105,105,105,0.1)] backdrop-blur-[10px] p-6 rounded-lg flex flex-col items-center text-center justify-between transition-shadow duration-300 hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <div className="relative mb-4" style={{ width: 220, height: 170 }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 350px"
                      style={{ objectFit: 'contain' }}
                      className="rounded-md"
                      priority={pageIdx === 0 && i === 0}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 break-words">{item.title}</h3>
                  {/* <p className="text-sm text-white/90 break-words">{item.description}</p> */}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



