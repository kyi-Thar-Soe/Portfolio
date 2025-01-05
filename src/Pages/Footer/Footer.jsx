import "./Footer.css";
import { MenuItem } from "@mui/material";
import facebook from "../../assets/facebook.png";

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
            <MenuItem key={link} href={link.path} className="footer-link-div">
              <a href={link.path} className="footer-link">
                {link.name}
              </a>
            </MenuItem>
          ))}
          <div className="contact-icon-div">
            <span className="ph-num">+95 9763460067</span>
            <span className="email-txt">kyis8571@gmail.com</span>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
