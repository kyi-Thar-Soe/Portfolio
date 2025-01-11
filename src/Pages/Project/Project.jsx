import { projectData } from "../../Data/ProjectData";
import "./Project.css";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home-sub-container">
      <div className="portfolio-container" id="portfolio">
        <h6>Projects</h6>
        <div>
          <h3>Real World Projects</h3>
        </div>
        <div className="project-div">
          {projectData.map((data, index) => {
            return (
              <a href={data.path} target="_blank" className="pData">
                <Card
                  key={index}
                  sx={{ maxWidth: 330 }}
                  className="card-width"
                  data-aos="zoom-in"
                  data-aos-duration="7500"
                >
                  <div className="position-relative project-h">
                    <CardMedia
                      sx={{ height: 200 }}
                      image={data.image}
                      className="pImage"
                    />
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
