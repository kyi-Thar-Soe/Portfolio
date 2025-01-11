import "./HomeSection.css";
import profile from "../../assets/profile.jpg";
import { Button } from "@mui/material";

export default function HomeSection() {
  return (
    <div className="home-parent-container">
      <div className="home-sub-container">
        <div className="home-container" id="home">
          <div className="introduce-div first-col-div">
            <h1>Hello, I'm Kyi Thar Soe</h1>
            <h2>
              <span>front-End</span> web developer
            </h2>
            <p>
              I am someone who is passionate about designing and developing
              websites and web applications that are not only user-centric and
              aesthetically appealing but also technically feasible and
              strategically viable.
            </p>
          </div>
          <div className="img-div sec-col-div">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
