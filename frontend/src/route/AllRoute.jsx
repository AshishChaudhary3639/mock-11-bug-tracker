import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/Login' element={<HomePage/>} />
    </Routes>
  )
}

export default AllRoute