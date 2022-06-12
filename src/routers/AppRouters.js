import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import  Register from '../pages/Register'

const AppRouters = () => {
  return (
    <div>
        <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Register/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default AppRouters