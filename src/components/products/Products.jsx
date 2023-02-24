import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Products = () => {

    const { idProduct } = useParams();
    const [product, setProduct] = useState({});
    const location = useLocation();

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

    useEffect(() => {
        console.log(location.state)
      const productFilter = listProducts.find(e => e.id === Number(idProduct));
      setProduct(productFilter);
    }, [])
    

  return (
    <>
    <h1>Productos</h1>
    <p>{product?.name}</p>
    <p>{product?.price}</p>
    </>
  )
}

export default Products