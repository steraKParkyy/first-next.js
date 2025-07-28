import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function KontaktInfo() {
  return (
    <section className="w-full mx-auto py-20 px-6 text-gray-800 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-black text-center text-shadow-black mb-6 mt-4">
        Kontakt
      </h2>
      <h3 className="text-xl font-semibold mb-8 text-center">
        Napíš, alebo mi pošli tvoju predstavu, rád pomôžem s tvojím projektom.
      </h3>
      <div className="space-y-0 text-lg w-full max-w-md flex flex-col items-center justify-center">
        <div className="group inline-flex w-max items-center space-x-3 hover:text-accent transition-colors duration-300">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-black group-hover:text-accent transition-colors duration-300" />
          <a href="mailto:mymultivers@gmail.com">
            mymultivers@gmail.com
          </a>
        </div>

        <div className="group inline-flex w-max items-center space-x-3 hover:text-accent transition-colors duration-300">
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-black group-hover:text-accent transition-colors duration-300" />
          <a
            href="https://www.instagram.com/ster4x_mm/"
            target="_blank"
            rel="noreferrer"
        
          >
            ster4x_mm
          </a>
        </div>

        <div className="group inline-flex w-max items-center space-x-3 hover:text-accent transition-colors duration-300">
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-black group-hover:text-accent transition-colors duration-300" />
          <a
            href="https://www.facebook.com/ster4x/"
            target="_blank"
            rel="noreferrer"
        
          >
            Marek Marguš
          </a>
        </div>

        <div className="group inline-flex w-max items-center space-x-3 hover:text-accent transition-colors duration-300">
          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-black group-hover:text-accent transition-colors duration-300" />
          <a href="tel:+421948451857">
            +421 948 451 857
          </a>
        </div>

        <div className="group inline-flex w-max items-center space-x-3 hover:text-accent transition-colors duration-300 cursor-pointer">
          <FontAwesomeIcon icon={faDiscord} className="w-6 h-6 text-black group-hover:text-accent transition-colors duration-300" />
          {/* TODO: doplň svoj Discord link sem */}
          <a
           href="https://discord.com/users/ster4x"
           target="_blank"
           rel="noreferrer"
           
          >
           ster4x
          </a>
        </div>
      </div>
    </section>
  )
}
