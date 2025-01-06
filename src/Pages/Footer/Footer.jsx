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
          <div className="footer-left-div">
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
          </div>
          <div className="contact-icon-div">
            <span className="ph-num">+95 9763460067</span>
            <span className="email-txt">kyis8571@gmail.com</span>
            <div className="social-icon">
              <a
                href="https://www.facebook.com/share/1A1FZ2y6oJ/"
                target="_blank"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/ma-kyi-thar-soe-043397292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/kyi-Thar-Soe" target="_blank">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
