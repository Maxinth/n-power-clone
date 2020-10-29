import React from "react";
import FinalPart from "./FinalPart";
import LeadingPart from "./LeadingPart";
import "./signup.css";
const SignUp = () => {
  return (
    <section className="signUp">
      <LeadingPart />
      <FinalPart
        title="Create Profile"
        details={[
          "This programme is specifically for unemployed youths within the ages of 18-35.",
          "After providing your email address and password, you will receive further instructions in your email. Please ensure you have access to this email address.",
        ]}
        buttonValue="Register"
        msg="Continue Application?"
        proceed="Log into Portal"
      />
    </section>
  );
};

export default SignUp;
