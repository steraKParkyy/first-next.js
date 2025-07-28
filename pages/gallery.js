// File: pages/gallery.js
import Navbar from '../components/Navbar';
import GalleryFull from '../components/GalleryFull';
import Footer from '../components/Footer';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="relative"> {/* pt-20, ak máš fixed navbar, aby neprekryl obsah */}
        <GalleryFull />
        <Footer/>
      </main>
    </>
  );
}
