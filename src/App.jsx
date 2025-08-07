import React from 'react'
import LandingPage from './yamcart/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import ProductMenu from './yamcart/components/ProductMenu'

import './App.css'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element = { <LandingPage />} />
      <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
      </Routes>
    </div>
  )
}

export default App