import "./Footer.css";
import * as React from "react";
import Button from "@mui/material/Button";
import facebook from "../../assets/fb.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const links = [
  {
    name: "HOME",
    path: "#home",
  },
  {
    name: "ABOUT",
    path: "#about",
  },
  {
    name: "PROJECTS",
    path: "#portfolio",
  },
];

export default function Footer() {
  return (
    <footer className="footer-container" id="contactFoot">
      <div className="home-sub-container">
        <div className="footer-div">
          {links.map((link) => (
            <Button
              href={link.path}
              key={link.name}
              className="footer-link-div"
              onClick={() => handleFooterLinkClick(link.name)}
              sx={{
                my: 2,
                display: "block",
                textTransform: "capitalize",
              }}
            >
              <span className="footer-link">{link.name}</span>
            </Button>
          ))}
          <div className="contact-icon-div">
            <span className="ph-num">+95 9763460067</span>
            <span className="email-txt">kyis8571@gmail.com</span>
            <a href="">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
