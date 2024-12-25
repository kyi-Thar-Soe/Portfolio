import { projectData } from "../../Data/ProjectData";
import "./Project.css";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

export default function Project() {
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
                <Card key={index} sx={{ maxWidth: 330 }} className="card-width">
                  <div className="position-relative">
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
