import React from "react";
import LeadingPart from "./LeadingPart";
import FinalPart from "./FinalPart";
const Login = () => {
  return (
    <section className="signUp">
      <LeadingPart />
      <FinalPart
        title="Log into N-Power Application Portal"
        details={[
          "Login with your email and password to continue your application for the N-Power programme.",
        ]}
        buttonValue="Login to Portal"
        msg="I forgot my password?"
        proceed="Reset Password"
        padding="62px"
      />
    </section>
  );
};

export default Login;
