
// // File: components/Footer.js
// import Link from 'next/link';
// import { Youtube, Instagram } from 'lucide-react';

// export default function Footer({ bgColor = 'bgzing' }) {
//   return (
//     <footer className= "text-xs text-black py-10 px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Logo + tagline */}
//         <div>
//           <h3 className="text-xl font-bold text-white mb-2">MyMultiverse</h3>
//           <p className="text-sm">Tvorím produkty ktoré ma bavia</p>
//         </div>

//         {/* Rýchle odkazy */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-2">Odkazy</h4>
//           <ul className="space-y-1 text-sm">
//             <li><Link href="/" className="hover:text-accent">Home</Link></li>
//             <li><Link href="/3d-produkty" className="hover:text-accent">3D Produkty</Link></li>
//             <li><Link href="/gallery" className="hover:text-accent">Galéria</Link></li>
//             <li><Link href="/kontakt" className="hover:text-accent">Kontakt</Link></li>
//             <li><Link href="/o-mm" className="hover:text-accent">o MM</Link></li>
//           </ul>
//         </div>

//         {/* Sociálne siete + kontakt */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-2">Sledujte ma</h4>
//           <div className="flex space-x-4 mb-4">
//             <Link href="https://www.youtube.com/@ster4x" target='blank' className="hover:text-accent"><Youtube /></Link>
//             <Link href="https://www.instagram.com/ster4x_mm/" target='blank' className="hover:text-accent"><Instagram /></Link>
//           </div>
//           <p className="text-sm">
//             Kontakt: <Link href="mailto:kontakt@mymultiverse.sk" className="hover:text-accent">kontakt@mymultiverse.sk</Link>
//           </p>
//         </div>
//       </div>

//       <hr className="border-gray-700 my-8" />
//       <p className="text-center text-xs text-black">© 2025 MyMultiverse. Všetky práva vyhradené.</p>
//     </footer>
//   );
// }


// File: components/Footer.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer({ bgColor = 'bgzing' }) {
  return (
    <footer className="text-xs text-black py-10 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + tagline */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">MyMultiverse</h3>
          <p className="text-sm">Tvorím produkty ktoré ma bavia</p>
        </div>

        {/* Rýchle odkazy */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Odkazy</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/3d-produkty" className="hover:text-accent">3D Produkty</Link></li>
            <li><Link href="/gallery" className="hover:text-accent">Galéria</Link></li>
            <li><Link href="/kontakt" className="hover:text-accent">Kontakt</Link></li>
            <li><Link href="/o-mm" className="hover:text-accent">o MM</Link></li>
          </ul>
        </div>

        {/* Sociálne siete + kontakt */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Sledujte ma</h4>
          <div className="flex space-x-4 mb-4">
            {/* <Link href="https://www.youtube.com/@ster4x" target="blank" className="hover:text-accent">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </Link> */}
            <Link href="https://www.instagram.com/ster4x_mm/" target="blank" className="hover:text-accent">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link href="https://www.facebook.com/ster4x" target="blank" className="hover:text-accent">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            {/* <Link href="https://discord.gg/tvojodkaz" target="blank" className="hover:text-accent">
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </Link> */}
          </div>
          {/* <p className="text-sm">
            Kontakt: <Link href="mailto:kontakt@mymultiverse.sk" className="hover:text-accent">kontakt@mymultiverse.sk</Link>
          </p> */}
        </div>
      </div>

      <hr className="border-gray-700 my-4" />
      <p className="text-center text-xs text-black">© 2025 MyMultiverse. Všetky práva vyhradené.</p>
    </footer>
  );
}
