import Navbar from '../components/Navbar';
import KontaktInfo from '../components/KontaktInfo';
import Formular from '../components/Formular';
import Footer from '../components/Footer';

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <main className="relative"> {/* pt-20, ak máš fixed navbar, aby neprekryl obsah */}
        <KontaktInfo/>
        <Formular />
        <Footer />
      </main>
      
    </>
  );
}