import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <p>
          Copyright &copy; 2020 <span>(cloned)</span>. Federal Ministry of
          Humanitarian Affairs, Disaster Management and Social Development.{" "}
          <br />
          All Rights Reserved.
        </p>
        <section className="footer__contacts">
          <div className="footer__mail">
            <EmailRoundedIcon />
            <span>
              <a href="mailto:apply@npvn.ng">apply@npvn.ng</a>
            </span>
            <p className="footer__number">
              <PhoneRoundedIcon />
              (09024282995)
            </p>
          </div>

          <div className="social-media">
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
