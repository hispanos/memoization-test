import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState('');

    const getData = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
    };

    useEffect(() => {
        getData();
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const listPokemons = useMemo(() => {
        if (pokemons.length) {
            return pokemons.filter((pokemon) => pokemon.name.includes(input))
        }
        return []
    }, [pokemons, input])


    return (
        <>
            <h2>Pokemones</h2>
            <input
                type="text"
                placeholder='Busca un pokemon'
                value={input}
                onChange={((e) => { handleChange(e) })} />
            {
                listPokemons.map((pokemon, index) => (
                    <p key={index}>{pokemon.name}</p>
                ))
            }
        </>
    )
}

export default Pokemons