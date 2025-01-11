import "./PortfolioSection.css";
import { cards } from "../../Data/CardData";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PortfolioSection() {
  const navigate = useNavigate();
  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="home-sub-container">
      <div className="portfolio-container" id="portfolio">
        <h6>recent projects</h6>
        <div className="portfolio-section">
          <h3>my portfolio</h3>
          <Button
            variant="contained"
            className="github-btn"
            sx={{
              "&:hover": {
                background: "transparent",
                color: "#191919",
                border: "1px solid #191919",
              },
            }}
          >
            <a href="https://github.com/kyi-Thar-Soe" className="gitAcc-link">
              <span>View My Github</span>
            </a>
          </Button>
        </div>
        <div className="project-div">
          {cards.map((card, index) => {
            return (
              <Card key={index} sx={{ maxWidth: 330 }} className="card-width">
                <div className="card-container">
                  <CardMedia
                    sx={{ height: 200 }}
                    image={card.image}
                    className="cardImage"
                  />
                  <Button
                    variant="outlined"
                    className="view-more-btn"
                    onClick={() => goToDetails(card.id)}
                  >
                    View More
                  </Button>
                </div>
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <a href={card.path} className="link">
                    {card.link}
                    <span>
                      <CallMadeIcon className="fs-5 ms-1" />
                    </span>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
