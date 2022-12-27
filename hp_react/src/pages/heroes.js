import { useState, useEffect } from 'react';
import Hero from '../components/hero';

export default function Heroes() {
    const [heroesList, setHeroesList] = useState([]);
    const url = 'https://hp-api.onrender.com/api/characters';

    function loadHeroes() {
        fetch(url).then(r => r.json()).then(setHeroesList)
    }

    useEffect(() => loadHeroes(), [])

    const heroesArr = heroesList.map(p => {
        return (
            <Hero
                image={p.image}
                name={p.name}
                birthday={p.dateOfBirth}
                actor={p.actor}
                house={p.house} />
        );
    })

    return (<div class="container m-5 d-flex flex-row flex-lg-wrap justify-content-center align-content-center">
        {heroesArr}
    </div>)

}
