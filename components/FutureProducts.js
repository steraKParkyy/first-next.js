
// File: components/ThreeDSection.js
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ThreeDSection() {
  // ---- Dáta ----
  const itemsSet1 = [
    { title: 'Držiaky na okuliare', href: '/produkty', description: 'Držiak na okuliare', image: '/assets/images/glassesholder.png' },
    { title: 'Personalizované misky', href: '/3d-produkty', description: 'Personalizované misky pre domácich maznáčikov', image: '/assets/images/argomiska.png' },
    { title: 'Držiaky na slúchadlá', href: '/3d-produkty', description: 'Praktické držiaky na vaše slúchadlá', image: '/assets/images/headsetholder.png' }
  ];
  const itemsSet2 = [
    { title: 'Držiaky na perá', href: '/3d-produkty', description: 'Originálny držiak na perá', image: '/assets/images/penholder.png' },
    { title: 'Držiaky na slúchadlá', href: '/3d-produkty', description: 'Praktické držiaky na vaše slúchadlá', image: '/assets/images/headsetholder.png' },
    { title: 'Personalizované misky', href: '/3d-produkty', description: 'Personalizované misky pre domácich maznáčikov', image: '/assets/images/argomiska.png' }
  ];

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

  // ---- Výpočet strán ----
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += slidesPerPage) {
      result.push(items.slice(i, i + slidesPerPage));
    }
    const last = result[result.length - 1];
    if (last && last.length < slidesPerPage) {
      const need = slidesPerPage - last.length;
      result[result.length - 1] = [...last, ...items.slice(0, need)];
    }
    return result;
  }, [items, slidesPerPage]);

  // Zdvojíme všetky stránky pre plynulý prechod
  const loopPages = useMemo(() => (pages.length > 1 ? [...pages, ...pages] : pages), [pages]);

  // ---- Auto-posun, pauza na hover/focus ----
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const durationMs = 4000;
  const transitionMs = 700;

  // interval pre auto-play
  useEffect(() => {
    if (paused || loopPages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, durationMs);
    return () => clearInterval(id);
  }, [paused, loopPages.length, durationMs]);

  // --- FINÁLNA OPRAVA: Logika pre neviditeľný skok s použitím setTimeout ---
  useEffect(() => {
    const el = trackRef.current;
    if (!el || pages.length <= 1) return;
    
    // Ak sa zmení index, ale nie je to skok, zabezpeč plynulý prechod
    if (el.style.transition === 'none') {
        // Vynútenie reflow, aby prehliadač zaregistroval zmenu
        void el.offsetWidth; 
        el.style.transition = `transform ${transitionMs}ms ease-in-out`;
    }
    
    const handleTransitionEnd = () => {
      // Ak sme na začiatku druhej (klonovanej) sady...
      if (index >= pages.length) {
        // ...vypneme animáciu a okamžite skočíme na začiatok
        el.style.transition = 'none';
        setIndex(index % pages.length);
      }
    };

    el.addEventListener('transitionend', handleTransitionEnd);
    return () => el.removeEventListener('transitionend', handleTransitionEnd);
  }, [index, pages.length]);


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
          style={{ 
            transform: `translateX(-${index * 100}%)`, 
            willChange: 'transform',
            transition: `transform ${transitionMs}ms ease-in-out` // Definuje transition priamo tu
          }}
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
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}