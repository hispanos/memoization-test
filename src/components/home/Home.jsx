import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const listProducts = [
        {
            id: 1,
            name: 'Aceite',
            price: 4000
        },
        {
            id: 2,
            name: 'Jabón',
            price: 2000
        },
        {
            id: 3,
            name: 'Salchicha',
            price: 1000
        }
    ]

  return (
    <>
    <h1>Productos</h1>
    <ul>
    {
        listProducts.map((element, index) => (
            <li key={index}><Link to={`products/${element.id}`} state={element}>{element.name}</Link></li>
        ))
    }
    </ul>
    </>
  )
}

export default Home