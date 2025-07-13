
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { produkty } from '../../data/produkty';
import { useState } from 'react';

export default function ProduktPage({ produkt }) {
//   const [velkost, setVelkost] = useState(produkt.velkosti[0]);
  const [velkost, setVelkost] = useState(produkt.velkosti && produkt.velkosti.length > 0 ? produkt.velkosti[0] : '');

  const [farba, setFarba] = useState(produkt.farby[0]);
  const [meno, setMeno] = useState('');
  const [email, setEmail] = useState('');
  const [odoslane, setOdoslane] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu si doplníš odoslanie emailu, fetch na backend, alebo iba alert
    setOdoslane(true);
  };

  return (
    <>
    <Navbar />
    <div className="max-w-full mx-auto py-16 px-20 mt-10 flex flex-col md:flex-row gap-8 items-start">
      {/* Ľavá strana - obrázok */}
      <div className="flex-1">
        <img
          src={produkt.obrazok}
          alt={produkt.nazov}
          className="w-full h-[400px] object-contain rounded-xl"
        />
      </div>
      {/* Pravá strana - formulár */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{produkt.nazov}</h1>
        <p className="mb-4">{produkt.popis}</p>
        <p className="font-semibold mb-4">{produkt.cena} €</p>
        {odoslane ? (
          <div className="p-4 bg-green-100 rounded">Ďakujeme za objednávku!</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
           {produkt.velkosti && produkt.velkosti.length > 0 && (
  <label>
    Veľkosť:
    <select
      value={velkost}
      onChange={e => setVelkost(e.target.value)}
      className="block border rounded p-2 w-full mt-1"
    >
      {produkt.velkosti.map(v => (
        <option key={v} value={v}>{v}</option>
      ))}
    </select>
  </label>
)}

            <label>
              Farba:
              <select
                value={farba}
                onChange={e => setFarba(e.target.value)}
                className="block border rounded p-2 w-full mt-1"
              >
                {produkt.farby.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </label>
            {/* Personalizácia podľa potreby */}
            <label>
              Meno na výrobku:
              <input
                type="text"
                value={meno}
                onChange={e => setMeno(e.target.value)}
                className="block border rounded p-2 w-full mt-1"
                placeholder="Zadajte meno (voliteľné)"
              />
            </label>
            {/* Kontaktný e-mail */}
            <label>
              E-mail:
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="block border rounded p-2 w-full mt-1"
                required
                placeholder="Váš e-mail"
              />
            </label>
            <button
              type="submit"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900 transition"
            >
              Objednať
            </button>
          </form>
        )}
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

// Next.js static generation
export async function getStaticPaths() {
  return {
    paths: produkty.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const produkt = produkty.find((p) => p.slug === params.slug) || null;
  return { props: { produkt } };
}
