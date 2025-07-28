// File: components products.js

import { produkty } from '../data/produkty';
import Link from 'next/link';


export default function Products() {
  return (
    <main className="relative min-h-[70vh] py-16 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center text-shadow-black mb-8 mt-4">MM produkty</h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produkty.map((produkt, idx) => (
            <div key={idx} className="glass-efect rounded-xl p-4 flex flex-col items-center">
              <img src={produkt.obrazok} alt={produkt.nazov} className="w-full h-40 object-contain rounded-lg mb-2" />
              <h2 className="text-lg font-semibold mb-1">{produkt.nazov}</h2>
              <p className="mb-2">{produkt.cena} €</p>
              <Link href={`/produkty/${produkt.slug}`} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition">
                Detail produktu
              </Link>
            </div>
          ))}
        </div>
    </main>
  );
}