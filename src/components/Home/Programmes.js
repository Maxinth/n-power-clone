import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import "./programmes.css";
import Programme from "./Programme";
import programData from "./programData";
import { motion } from "framer-motion";
import { programHeaderVariant } from "../motionVariants/varProg";
import { Link } from "react-router-dom";
const shiftByIndex = (index) => {
  let shiftValue;
  if (index === 0) {
    shiftValue = "16px";
  } else if (index > 0 && index < 3) {
    shiftValue = "41px";
  } else {
    shiftValue = "16px";
  }
  return shiftValue;
};

const Programmes = () => {
  return (
    <div className="programmes">
      <Navbar />
      <motion.section
        className="programmes__header"
        variants={programHeaderVariant}
        initial="hidden"
        animate="visible"
      >
        <h2>All N-Power Programmes</h2>
      </motion.section>

      <div className="programmes__list">
        {programData.map((program, index) => (
          <Link to="/signup">
            <Programme
              key={program.title}
              {...program}
              paddingTop={
                program.title !== "N-Build, Tech and Creative" && "25px"
              }
              shiftToAlign={shiftByIndex(index)}
            />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Programmes;
