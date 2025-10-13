// // File: pages/index.js
// import Navbar from '../components/Navbar';
// import HomeSection from '../components/HomeSection';
// import FutureProducts from '../components/FutureProducts';
// import WhyMM from '../components/WhyMM';
// import Kontakt from '../components/Formular';
// import Footer from '../components/Footer';
// import GalleryHome from '../components/GalleryHome';
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="relative">
//         <HomeSection />
//         {/* <div className="relative z-10 mt-[100vh]"> */}
//           <FutureProducts />
//           <WhyMM />
//           {/* <Kontakt /> */}
//           <GalleryHome />
//           <Footer/>
//         {/* </div> */}
//       </main>
//     </>
//   );
// }

// File: pages/index.js
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import FutureProducts from '../components/FutureProducts';
import WhyMM from '../components/WhyMM';
import Kontakt from '../components/Formular';
import Footer from '../components/Footer';
import GalleryHome from '../components/GalleryHome';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Funkcia na kontrolu načítania všetkého obsahu
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      // ak je už všetko načítané (napr. refresh)
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {/* LOADER OVERLAY */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500">
          <div className="h-12 w-12 rounded-full border-4 border-white/40 border-t-white animate-spin mb-6"></div>
          <p className="text-lg tracking-wider">Načítavam vesmír MyMultiverse...</p>
        </div>
      )}

      {/* HLAVNÝ OBSAH */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="relative">
          <HomeSection />
          <FutureProducts />
          <WhyMM />
          {/* <Kontakt /> */}
          <GalleryHome />
          <Footer />
        </main>
      </div>
    </>
  );
}
