import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSyncAlt, faShieldAlt, faPencilAlt, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons'


export default function OMm() {
  return (
    <section className="py-16 sm:px-6 lg:px-20 relative">

        <h1 className="text-4xl font-bold text-black text-center text-shadow-black pb-16 pt-12">
        O Projekte MM
        </h1>
        <p className='px-6 mb-16 lg:px-20 text-xl'>
            Moje meno je Marek Marguš (MM) a 3D tlač je pre mňa viac než len technológia – je to spôsob, ako premieňať nápady na skutočné predmety. Neustále objavujem nové možnosti, posúvam hranice a skúmam, čo všetko sa dá vytvoriť. <br></br><br></br>
            MyMultiverse (MM) je môj osobný projekt, v ktorom spájam kreativitu, technické zručnosti a nekonečné možnosti 3D tlače do jedného celku.<br></br><br></br>
            Tento projekt som založil preto, že ma baví vytvárať originálne a praktické veci. MM je miesto, kde sa vrstva po vrstve rodia objekty, ktoré môžu nájsť svoje miesto doma, v práci aj vo voľnom čase.
        </p>
        
    </section>
  )
}