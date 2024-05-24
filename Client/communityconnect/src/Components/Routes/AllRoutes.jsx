// AllRoutes.jsx

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../LandingPage.jsx";
import Login from "../UserLogin.jsx";
import VolunteerProfile from "../Volunteers/VolunteerProfile.jsx";
import OrganizationPosts from "../Organizations/Postings/OrganizationPosts.jsx";
import SignUpPage from "../SignUpPage.jsx";
import VolunteerSignUpForm from "../Volunteers/VolunteerSignUp/VolunteerSignUpForm.jsx";
import OrganizationSignUpForm from "../Organizations/OrganizationSignUp/OrganizationSignUpForm.jsx";
import OrganizationProfile from "../Organizations/OrganizationProfile.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/volunteerprofile" element={<VolunteerProfile />} />
      <Route path="/orgposts" element={<OrganizationPosts />} />
      <Route path="/volunteersignup" element={<VolunteerSignUpForm />} />
      <Route path="/organizationsignup" element={<OrganizationSignUpForm />} />
      <Route path="/organizationprofile" element={<OrganizationProfile />} />
    </Routes>
  );
};

export default AllRoutes;
