// File: components/WhyMM.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSyncAlt, faShieldAlt, faPencilAlt, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function OMmWhyMM() {
  return (
    <section className="bgdeepspace py-10 pb-20 px-6 lg:px-10 relative">
        <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
            <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
            <path
                fill="#434343" // alebo zmeň na tvoju bg farbu!
                d="M0,64L60,69.3C120,75,240,85,360,96C480,107,600,117,720,106.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"></path>
            </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center text-shadow-white mb-8 mt-4">
            Prečo si vybrať MY MULTIVERSE?
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-white">
            <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faHeart} className="text-accent text-5xl mt-1 heartbeat" />
            <div>
                <h3 className="text-xl font-semibold text-shadow-white"> Vášeň a osobný prístup</h3>
                <p>
                Robím to, čo ma baví, a dávam do toho celé svoje srdce a čas.
                MyMultiverse nie je pásová výroba – každý výrobok je jedinečný
                a vytvorený s láskou.
                </p>
            </div>
            </div>

            <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faSyncAlt} className="text-accent text-5xl mt-1 rotate" />
            <div>
                <h3 className="text-xl font-semibold text-shadow-white"> Neustále zlepšovanie a inovácia</h3>
                <p>
                Stále sa učím, skúšam nové technológie a techniky, aby som mohol
                prinášať tie najmodernejšie a najkvalitnejšie 3D výrobky presne podľa potrieb svojich zákazníkov.
                </p>
            </div>
            </div>

            <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faShieldAlt} className="text-accent text-5xl mt-1 shield-bounce" />
            <div>
                <h3 className="text-xl font-semibold text-shadow-white"> Kvalita na prvom mieste</h3>
                <p>
                Každý 3D výrobok vyrábam s maximálnou starostlivosťou a precíznosťou,
                aby výrobok presne spĺňal tvoje požiadavky.
                </p>
            </div>
            </div>

            <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faPencilAlt} className="text-accent text-5xl mt-1 pencil-draw" />
            <div>
                <h3 className="text-xl font-semibold text-shadow-white"> Návrhy šité na mieru</h3>
                <p>
                Tvoje predstavy premením na unikátne 3D modely presne podľa tvojich
                požiadaviek.
                </p>
            </div>
            </div>
            
            <div className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faClock} className="text-accent text-5xl mt-1 clock-tick" />
            <div>
                <h3 className="text-xl font-semibold text-shadow-white"> Rýchla a spoľahlivá výroba</h3>
                <p>
                Dbám na dodržiavanie termínov, aby si svoj výrobok dostal načas a bez
                komplikácií.
                </p>
            </div>
            </div>
            <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faHandshake} className="text-accent text-5xl mt-1 handshake-shake" />
                <div>
                    <h3 className="text-xl font-semibold text-shadow-white"> Osobný prístup</h3>
                    <p>
                    Ku každému zákazníkovi pristupujem individuálne a som pripravený
                    pomôcť s akýmikoľvek otázkami či úpravami.
                    </p>
                </div>
            </div>
        
        </div>
    </section>
  )
}
