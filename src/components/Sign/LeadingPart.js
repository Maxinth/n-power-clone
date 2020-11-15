import React from "react";
import fourPeople from "../assets/people.png";
import "./signup.css";

const LeadingPart = () => {
  return (
    <div
      className="leadingPart"
      // {...variantProps}
      // variants={leadingPartVariant}
    >
      <img
        src="https://npower.fmhds.gov.ng/uploads/logo.svg"
        alt=" Nigerian N-Power"
      />
      <h3>
        N-Power has changed the lives of over 500,000 youths in all 6
        geo-political zones.
      </h3>
      <img
        src={fourPeople}
        alt="beneficiaries"
        className="leadingPart__people"
      />
    </div>
  );
};

export default LeadingPart;
