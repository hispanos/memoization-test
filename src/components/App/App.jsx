import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Pokemons from '../Pokemons/Pokemons';
import './style.css'

const App = () => {

    const [input, setInput] = useState(0);
    const [isChanged, setIsChanged] = useState(false);
    const [some, setSome] = useState('')

    const getData = useCallback(
        async () => {
            if (isChanged) {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
                console.log(response.data)
            }
        },
        [isChanged],
    )

    useEffect(() => {
        getData()
    }, [isChanged])

    const test = () => {
        if (window.innerWidth < 400) {
            console.log('Estoy en la media Quuery')
            setSome('box-brown')
        }else {
            setSome('')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', test);
        return () => {
            window.removeEventListener('resize', test);
        }
    }, [])


    const handleChange = (e) => {
        setInput(e.target.value)
    }

    //useMemo

    const valueSum = useMemo(() => { return (Number(input) * 19) / 100 }, [input]);



    return (
        <div>
            <div className={`box ${some}`}></div>
            <h1>Memoization</h1>
            <input type="text" onChange={(e) => { handleChange(e) }} value={input} />
            <button onClick={() => { setIsChanged(!isChanged) }}>Cambiar</button>
            <p>{valueSum}</p>
            <Pokemons />
        </div>
    )
}

export default App