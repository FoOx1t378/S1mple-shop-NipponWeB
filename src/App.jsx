
import React from 'react'
import Headbar from './components/Headbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Shop from './components/Shop'
import { Route, Routes, useRoutes } from 'react-router-dom'

const App = () => {
  
  return (
    <>
      <Headbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App