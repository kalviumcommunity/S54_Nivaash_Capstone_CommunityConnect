import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage.jsx'
import SignUp from '../SignUp.jsx'
import Login from "../Login.jsx"
import VolunteerProfile from '../VolunteerProfile.jsx'
import OrganizationPosts from '../Postings/OrganizationPosts.jsx'


const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/volunteerprofile" element={<VolunteerProfile/>} />
            <Route path="/orgposts" element={<OrganizationPosts/>} />
        </Routes>  
    )
}

export default AllRoutes