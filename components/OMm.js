import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSyncAlt, faShieldAlt, faPencilAlt, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons'


export default function OMm() {
  return (
    <section className="py-16 sm:px-6 lg:px-20 relative">

        <h2 className="text-4xl font-bold text-black text-center text-shadow-black mb-16 mt-12">
        O Projekte MM
        </h2>
        <p className='px-6 mb-16 lg:px-20 text-xl'>
            Volám sa Marek Marguš (MM) a 3D tlač je pre mňa oveľa viac než len technológia – je to spôsob, ako premieňať nápady na hmatateľnú realitu. MyMultiverse, alebo jednoducho MM, je môj osobný svet, kde spájam kreativitu, technické zručnosti a nekonečné možnosti 3D tlače do jedného celku. <br></br><br></br>
            Tento projekt som založil, aby som vytváral originálne a funkčné 3D modely, ktoré nielen vyzerajú dobre, ale majú aj zmysel a praktické využitie. MM je miesto, kde sa stretáva digitálny svet s reálnym, kde sa vrstva po vrstve rodia objekty, ktoré môžu slúžiť doma, v práci aj vo voľnom čase. <br></br><br></br>
            Pre mňa je 3D tlač neustálym objavovaním nových možností, testovaním hraníc a posúvaním vlastných schopností. Verím, že technológia má moc otvoriť dvere k tvorbe, ktorú si môže dovoliť každý, kto má chuť a predstavivosť.<br></br><br></br>
            MyMultiverse nie je len projekt – je to cesta. Cesta, ktorou ťa rád prevediem, či už si tu pre inšpiráciu, praktické riešenia, alebo chceš zdieľať svoju vášeň pre 3D tlač so mnou.
        </p>
        
    </section>
  )
}