import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Products from '../components/products/Products'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:idProduct' element={<Products />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router