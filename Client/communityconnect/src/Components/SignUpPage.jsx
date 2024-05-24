import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";
import NavBar from "./NavBar.jsx";
import VolunteerSignUpForm from "./Volunteers/VolunteerSignUp/VolunteerSignUpForm.jsx";
import OrganizationSignUpForm from "./Organizations/OrganizationSignUp/OrganizationSignUpForm.jsx";

const SignUpPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowSignUpForm(true);
  };

  const handleSignUpCompleted = () => {
    setShowSignUpForm(false);
    navigate("/"); // Navigate to the home page after sign-up completion
  };

  return (
    <div className="h-full">
      <NavBar onRoleSelect={handleRoleSelect} />
      {showSignUpForm && selectedRole === "volunteer" && (
        <VolunteerSignUpForm onComplete={handleSignUpCompleted} />
      )}
      {showSignUpForm && selectedRole === "organization" && (
        <OrganizationSignUpForm onComplete={handleSignUpCompleted} />
      )}
    </div>
  );
};

export default SignUpPage;
