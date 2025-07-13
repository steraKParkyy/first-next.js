import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSyncAlt, faShieldAlt, faPencilAlt, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons'


export default function OMm() {
  return (
    <section className="py-16 sm:px-6 lg:px-20 relative">
      {/* <div className="absolute wavesection left-0 w-full pointer-events-none z-10 rotate-180">
        <svg viewBox="0 0 1440 150" className="w-full h-[50px]" preserveAspectRatio="none">
          <path
            fill="#EAEAEA" // alebo zmeň na tvoju bg farbu!
            d="M0,64L60,69.3C120,75,240,85,360,96C480,107,600,117,720,106.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"></path>
        </svg>
      </div> */}

        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center text-shadow-black mb-8 mt-4">
        O Projekte MM
        </h2>
        <p className='py-16 sm:px-6 lg:px-20'>
            Volám sa Marek a 3D tlač je pre mňa oveľa viac než len technológia – je to spôsob, ako premieňať nápady na hmatateľnú realitu. MyMultiverse, alebo jednoducho MM, je môj osobný svet, kde spájam kreativitu, technické zručnosti a nekonečné možnosti 3D tlače do jedného celku. <br></br><br></br>
            Tento projekt som založil, aby som vytváral originálne a funkčné 3D modely, ktoré nielen vyzerajú dobre, ale majú aj zmysel a praktické využitie. MM je miesto, kde sa stretáva digitálny svet s reálnym, kde sa vrstva po vrstve rodia objekty, ktoré môžu slúžiť doma, v práci aj vo voľnom čase. <br></br><br></br>
            Pre mňa je 3D tlač neustálym objavovaním nových možností, testovaním hraníc a posúvaním vlastných schopností. Verím, že technológia má moc otvoriť dvere k tvorbe, ktorú si môže dovoliť každý, kto má chuť a predstavivosť.<br></br><br></br>
            MyMultiverse nie je len projekt – je to cesta. Cesta, ktorou ťa rád prevediem, či už si tu pre inšpiráciu, praktické riešenia, alebo chceš zdieľať svoju vášeň pre 3D tlač so mnou.
        </p>

        {/* <div className="bgdeepspace justify-items-center relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center text-shadow-black mb-8 mt-4">
                Prečo si vybrať MY MULTIVERSE?
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-800">
                <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faHeart} className="text-accent text-5xl mt-1" />
                <div>
                    <h3 className="text-xl font-semibold"> Vášeň a osobný prístup</h3>
                    <p>
                    Robím to, čo ma baví, a dávam do toho celé svoje srdce a čas.
                    MyMultiverse nie je pásová výroba – každý výrobok je jedinečný
                    a vytvorený s láskou.
                    </p>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faSyncAlt} className="text-accent text-5xl mt-1" />
                <div>
                    <h3 className="text-xl font-semibold"> Neustále zlepšovanie a inovácia</h3>
                    <p>
                    Stále sa učím, skúšam nové technológie a techniky, aby som mohol
                    prinášať tie najmodernejšie a najkvalitnejšie 3D výrobky presne podľa potrieb svojich zákazníkov.
                    </p>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-accent text-5xl mt-1" />
                <div>
                    <h3 className="text-xl font-semibold"> Kvalita na prvom mieste</h3>
                    <p>
                    Každý 3D výrobok vyrábam s maximálnou starostlivosťou a precíznosťou,
                    aby výrobok presne spĺňal tvoje požiadavky.
                    </p>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPencilAlt} className="text-accent text-5xl mt-1" />
                <div>
                    <h3 className="text-xl font-semibold"> Návrhy šité na mieru</h3>
                    <p>
                    Tvoje predstavy premením na unikátne 3D modely presne podľa tvojich
                    požiadaviek.
                    </p>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faClock} className="text-accent text-5xl mt-1" />
                <div>
                    <h3 className="text-xl font-semibold"> Rýchla a spoľahlivá výroba</h3>
                    <p>
                    Dbám na dodržiavanie termínov, aby si svoj výrobok dostal načas a bez
                    komplikácií.
                    </p>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faHandshake} className="text-accent text-5xl mt-1" />
                <div>
                    <h3 className="text-xl font-semibold"> Osobný prístup</h3>
                    <p>
                    Ku každému zákazníkovi pristupujem individuálne a som pripravený
                    pomôcť s akýmikoľvek otázkami či úpravami.
                    </p>
                </div>
                </div>
            </div>
        </div> */}
    </section>
  )
}