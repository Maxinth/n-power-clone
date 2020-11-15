import React from "react";
import LeadingPart from "./LeadingPart";
import FinalPart from "./FinalPart";
function ForgotPassword() {
  return (
    <section className="sign-container">
      <LeadingPart />
      <FinalPart
        title="Forgot Password ?"
        details={[
          "Fill in your email address and we will send you a link to reset your password. Ensure you have access to this email address.",
        ]}
        buttonValue="Reset my password"
        msg="I remember my password?"
        proceed="Login into Portal"
        padding="112px"
        goTo="/login"
        showPassField={false}
      />
    </section>
  );
}

export default ForgotPassword;
