import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { produkty } from '../data/produkty';
import Link from 'next/link';

export default function Produkty() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[70vh] py-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-8">Naše produkty</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produkty.map((produkt, idx) => (
            <div key={idx} className="rounded-xl shadow p-4 bg-white flex flex-col items-center">
              <img src={produkt.obrazok} alt={produkt.nazov} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h2 className="text-lg font-semibold mb-1">{produkt.nazov}</h2>
              <p className="mb-2">{produkt.cena} €</p>
              <Link href={`/produkty/${produkt.slug}`} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition">
                Detail produktu
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </main>
      
    </>
  );
}
