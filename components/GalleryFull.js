

import { useState, useEffect } from 'react'

const galleryData = [
  {
    key: 'fans',
    name: 'Fanušikovské výtlačky',
    banner: '/assets/imgfullgallery/fans/original/IMG2.jpg',
    images: Array.from({ length: 3 }, (_, i) => ({
      thumb: `/assets/imgfullgallery/fans/nahlad/IMG${i + 1}.jpg`,
      original: `/assets/imgfullgallery/fans/original/IMG${i + 1}.jpg`
    })),
  },
  {
    key: 'products',
    name: 'Moje výtlačky',
    banner: '/assets/imgfullgallery/myprint/original/IMG7.jpg',
    images: Array.from({ length: 11 }, (_, i) => ({
      thumb: `/assets/imgfullgallery/myprint/nahlad/IMG${i + 1}.jpg`,
      original: `/assets/imgfullgallery/myprint/original/IMG${i + 1}.jpg`
    })),
  }
]

export default function GalleryHome() {
  const [openGallery, setOpenGallery] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const currentGallery = galleryData.find(g => g.key === openGallery)

  const openSlider = (idx) => {
    setCurrentIndex(idx)
    setIsOpen(true)
  }

  const prevImage = () => {
    if (!currentGallery) return
    setCurrentIndex((currentIndex - 1 + currentGallery.images.length) % currentGallery.images.length)
  }

  const nextImage = () => {
    if (!currentGallery) return
    setCurrentIndex((currentIndex + 1) % currentGallery.images.length)
  }

  const goBack = () => {
    setOpenGallery(null)
    setIsOpen(false)
    setCurrentIndex(0)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 px-6 py-16">
      <h2 className="text-3xl font-bold text-black text-shadow-black text-center mb-10 mt-4">
        Galéria výtlačkov
      </h2>

      {/* Výber galérie */}
      {!openGallery && (
        <div className="flex flex-col w-full max-w-3xl space-y-8">
          {galleryData.map(gallery => (
            <button
              key={gallery.key}
              className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden shadow-lg group hover-scale-purple-shadow"
              onClick={() => setOpenGallery(gallery.key)}
              style={{ minHeight: '100px' }}
            >
              <img
                src={gallery.banner}
                alt={gallery.name}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition absolute inset-0"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl text-white font-bold drop-shadow-xl text-shadow-white">{gallery.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Zobrazenie galérie */}
      {openGallery && currentGallery && (
        <div className="relative w-full flex flex-col items-center">
          <div className="grid w-full max-w-3xl mb-6 grid-cols-3 items-center">
            <button
              onClick={goBack}
              className="justify-self-start text-black text-lg font-semibold px-4 py-2 rounded hover:text-accent transition"
            >
              ← Späť
            </button>
            <h3 className="justify-self-center text-2xl font-bold text-black text-center">
              {currentGallery.name}
            </h3>
            <div></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-[800px] mx-auto justify-items-center">
            {currentGallery.images.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-square max-w-[200px] cursor-pointer"
                onClick={() => openSlider(idx)}
              >
                <img
                  src={img.thumb}
                  alt={`${currentGallery.name} obrázok ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                  style={{ aspectRatio: "1/1", width: "100%", height: "100%" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox/slider */}
      {isOpen && currentGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Zatvárací krížik */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Zatvoriť galériu"
            className="absolute top-20 right-4 text-white text-3xl font-bold hover:text-accent transition"
          >
            &times;
          </button>

          {/* Šípka vľavo */}
          <button
            onClick={prevImage}
            aria-label="Predchádzajúci obrázok"
            className="absolute left-20 text-white text-4xl font-bold hover:text-accent transition select-none"
          >
            &#8249;
          </button>

          {/* Aktuálny obrázok */}
          <div className="relative w-[80vw] max-w-[900px] h-[80vh] sm:h-[70vh] flex items-center justify-center">
            <img
              src={currentGallery.images[currentIndex].original}
              alt={`${currentGallery.name} obrázok ${currentIndex + 1}`}
              className="object-contain w-full h-full rounded-lg"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>

          {/* Šípka vpravo */}
          <button
            onClick={nextImage}
            aria-label="Nasledujúci obrázok"
            className="absolute right-20 text-white text-4xl font-bold hover:text-accent transition select-none"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
