// File: pages/index.js
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import FutureProducts from '../components/FutureProducts';
import WhyMM from '../components/WhyMM';
import Kontakt from '../components/Formular';
import Footer from '../components/Footer';
import GalleryHome from '../components/GalleryHome';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HomeSection />
        {/* <div className="relative z-10 mt-[100vh]"> */}
          <FutureProducts />
          <WhyMM />
          {/* <Kontakt /> */}
          <GalleryHome />
          <Footer/>
        {/* </div> */}
      </main>
    </>
  );
}