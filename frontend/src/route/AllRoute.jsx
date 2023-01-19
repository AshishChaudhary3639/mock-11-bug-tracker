import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import Dashboard from '../pages/Dashboard'
import LoginPage from '../pages/Login'
const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  )
}

export default AllRoute