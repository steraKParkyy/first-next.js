

// // File: components/ThreeDSection.js
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ThreeDSection() {
//   const itemsSet1 = [
//     {
//       title: 'Držiaky',
//       href: '/3d-produkty',
//       description: 'Originálny držiak na okuliare',
//       image: '/assets/images/glassesholder.png',
//       alt: 'Držiak na okuliare'
//     },
//     {
//       title: 'Misky',
//       href: '/3d-produkty',
//       description: 'Personalizované misky pre domácich maznáčikov',
//       image: '/assets/images/miskaa.png',
//       alt: 'Misky'
//     }
//   ];

//   const itemsSet2 = [
//     {
//       title: 'Držiaky na perá',
//       href: '/3d-produkty',
//       description: 'Originálny držiak na perá',
//       image: '/assets/images/penholder.png',
//       alt: 'Držiak na perá'
//     },
//     {
//       title: 'Držiaky na slúchadlá',
//       href: '/3d-produkty',
//       description: 'Praktické držiaky na vaše slúchadlá',
//       image: '/assets/images/headsetholder.png',
//       alt: 'Držiaky na slúchadlá'
//     }
//   ];

//   // For seamless looping, include the first set again
//   const groups = [itemsSet1, itemsSet2, itemsSet1];

//   return (
//     <section className="bg-sectionDark py-16 px-4 sm:px-6 lg:px-20">
//       <h2 className="text-3xl font-bold text-white text-center mb-14">3D Produkty</h2>
//       <div className="overflow-hidden relative">
//         <div className="flex w-[300%] animate-carousel">
//           {groups.map((set, idx) => (
//             <div key={idx} className="flex w-1/3 justify-center gap-8">
//               {set.map(item => (
//                 <Link
//                   key={`${item.title}-${idx}`}
//                   href={item.href}
//                   className="group bg-[rgba(105,105,105,0.1)] backdrop-blur-[10px] p-6 rounded-lg flex flex-col items-center text-center transition-shadow duration-300]"
//                 >
//                   <div className="w-full mb-4">
//                     <Image
//                       src={item.image}
//                       alt={item.alt}
//                       width={200}
//                       height={160}
//                       className="w-full h-auto rounded-md object-contain"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 break-words">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-white break-words">
//                     {item.description}
//                   </p>
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
import Image from 'next/image';
import Link from 'next/link';

export default function ThreeDSection() {
  const itemsSet1 = [
    {
      title: 'Držiaky na okuliare',
      href: '/3d-produkty',
      description: 'Originálny držiak na okuliare',
      image: '/assets/images/glassesholder.png',
      imgWidth: 200,
      imgHeight: 160
    },
    {
      title: 'Personalizované misky',
      href: '/3d-produkty',
      description: 'Personalizované misky pre domácich maznáčikov',
      image: '/assets/images/miskaa.png',
      imgWidth: 250,
      imgHeight: 180
    },
    {
      title: 'Personalizované misky',
      href: '/3d-produkty',
      description: 'Personalizované misky pre domácich maznáčikov',
      image: '/assets/images/miskaa.png',
      imgWidth: 250,
      imgHeight: 180
    }
  ];

  const itemsSet2 = [
    {
      title: 'Držiaky na perá',
      href: '/3d-produkty',
      description: 'Originálny držiak na perá',
      image: '/assets/images/penholder.png',
      imgWidth: 200,
      imgHeight: 160
    },
    {
      title: 'Držiaky na slúchadlá',
      href: '/3d-produkty',
      description: 'Praktické držiaky na vaše slúchadlá',
      image: '/assets/images/headsetholder.png',
      imgWidth: 220,
      imgHeight: 160
    },
    {
      title: 'Držiaky na slúchadlá',
      href: '/3d-produkty',
      description: 'Praktické držiaky na vaše slúchadlá',
      image: '/assets/images/headsetholder.png',
      imgWidth: 220,
      imgHeight: 160
    }
  ];

  // For seamless looping, include the first set again
  const groups = [itemsSet1, itemsSet2, itemsSet1];

  return (
    <section className="bgdeepspace py-6 pb-20 sm:px-6 lg:px-20 relative">
      <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
        <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
          <path
            fill="#434343"
            d="M0,70 Q360,130 720,70 Q1080,10 1440,70 L1440,0 L0,0Z"
          />
        </svg>
      </div>


      <h2 className="text-3xl font-bold text-white text-shadow-white text-center mb-14 mt-4">Zaujímavé produkty</h2>
      <div className="overflow-hidden relative">
        <div className="flex w-[300%] animate-carousel">
          {groups.map((set, idx) => (
            <div key={idx} className="flex w-1/3 justify-center gap-14">
              {set.map(item => (
                <Link
                  key={`${item.title}-${idx}`}
                  href={item.href}
                  className="group w-[350px] h-[300px] bg-[rgba(105,105,105,0.1)] backdrop-blur-[10px] p-6 rounded-lg flex flex-col items-center text-center justify-between transition-shadow duration-300]"
                >
                  <div
                    className="relative mb-4"
                    style={{ width: item.imgWidth, height: item.imgHeight }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 break-words">
                    {item.title}
                  </h3>
                  {/* <p className="text-sm text-white break-words">
                    {item.description}
                  </p> */}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes carousel {
            0%, 40% { transform: translateX(0); }
            50%, 90% { transform: translateX(-33.333%); }
            100% { transform: translateX(-66.666%); }
          }
          .animate-carousel {
            animation: carousel 7s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}





