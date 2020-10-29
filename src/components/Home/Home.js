import React, { useState } from "react";
import "./home.css";
import minister from "../assets/minister.jpg";
import beneficiaries from "../assets/beneficiaries.jpg";
import DoneIconAll from "@material-ui/icons/DoneAll";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@material-ui/icons/CheckBoxSharp";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [checkBox, setCheckBox] = useState(false);
  const isChecked = checkBox === true ? "isChecked" : "";
  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="home__statement">
          <div className="home__statementLeft">
            <h2>
              Welcome to the <br />
              N-Power Programme
            </h2>
            <hr />
            <p>
              Decades of neglect on the right drivers of job creation has left a
              huge number of our youths without the skill, job, or economic
              means to survive. President Muhammadu Buhari's led government is
              making deliberate efforts to address this vacuum through various
              social intervention programmes.
            </p>
            <p>
              The COVID-19 pandemic has unravelled a number of challenges but
              it’s our duty as Government to intervene and support young people
              who are unable to find jobs and accelerate efforts to provide an
              enabling environment for businesses to create sustainable jobs.
            </p>
            <p>
              Everyone deserves an opportunity to rise no matter their
              circumstance, educational background or belief.
              <span className="anomaly">
                Since inception, N-Power has trained over 500,000 beneficiaries
                in various vocational areas - farming, agro-processing,
                financial literacy, communication, digital skills amongst a host
                of others.
              </span>
            </p>
          </div>

          <div className="home__statementRight">
            <p>
              Since inception, N-Power has trained over 500,000 beneficiaries in
              various vocational areas - farming, agro-processing, financial
              literacy, communication, digital skills amongst a host of others.
            </p>
            <p>
              About 109,823 beneficiaries have gone on to set up businesses
              within their communities as a result of their training and time in
              the N-Power Programme. We are proud of the results so far and look
              forward to impacting even more Nigerians as we commence efforts to
              register a new batch of beneficiaries.
            </p>
            <p>
              My team and I at the Ministry are committed to this programme and
              all efforts geared towards supporting the vulnerable. We are
              stronger together and we will make it through these trying times.
            </p>
            <div className="home__mini">
              <section>
                <div>
                  <h5>Sadiya Umar Farouq</h5>
                  <h6>HONOURABLE MINISTER</h6>
                </div>
                <p className="home__miniTitle">
                  Humanitarian Affairs, Disaster Management and Social
                  Development.
                </p>
              </section>
              <div className="home__miniImage">
                <img src={minister} alt="madam-sadiya not showing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeTwo">
        <div className="homeTwo__imgContainer">
          <img src={beneficiaries} alt="beneficiaries" />
        </div>
        <div className="homeTwo__programmeDetails">
          <h3>Applying for the N-Power Programme</h3>
          <p className="homeTwo__details">
            <DoneIconAll />
            <span>
              Get your unique 11 digit Bank Verification Number (BVN) from your
              bank
            </span>
          </p>
          <p className="homeTwo__details">
            <DoneIconAll />
            <span>
              Ensure you have your school certificates, valid means of
              identification, and NYSC Certificate.
            </span>
          </p>
          <p className="homeTwo__details">
            <DoneIconAll />
            <span>
              Disclaimer: Picking a programme is not a guarnatee that you will
              be selected for it.
            </span>
          </p>
          <p className="homeTwo__details">
            <DoneIconAll />
            <span>
              N-Power application is FREE and you should pay no one to apply.
            </span>
          </p>
          <p className="homeTwo__details">
            <DoneIconAll />
            <span>
              N-Power is a tenured programme and you will exit after the
              duration of the programme
            </span>
          </p>
          <form action="#">
            <div className="form-check">
              <>
                {checkBox ? (
                  <CheckBoxSharpIcon
                    className="checkedBox"
                    onClick={() => setCheckBox(!checkBox)}
                  />
                ) : (
                  <CheckBoxOutlineBlankSharpIcon
                    onClick={() => setCheckBox(!checkBox)}
                  />
                )}
              </>
              <span>I AGREE</span>
            </div>
            <Link to="/signup" className="sUp">
              <button className={isChecked} disabled={!checkBox}>
                Apply For N-Power
              </button>
            </Link>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
