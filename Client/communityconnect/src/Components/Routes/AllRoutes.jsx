import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage.jsx'
import Login from '../Login.jsx'
import SignUp from '../SignUp.jsx'


const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>  
    )
}

export default AllRoutes