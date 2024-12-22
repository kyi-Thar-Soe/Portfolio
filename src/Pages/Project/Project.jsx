import { cards } from '../../Data/CardData';
import {Button} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Project() {
    const [showButton,setShowButton] = useState(null);
    const navigate = useNavigate();
    const handleClick = (id)=>{
        setShowButton(id);
    }
    const goToDetails = (id) => {
        navigate(`/details/${id}`)
    };
    return (
        <div className="home-sub-container">
            <div className="portfolio-container" id='portfolio'>
            <h6>Projects</h6>
            <div>
                <h3>Real World Projects</h3>
            </div>
            <div className='project-div'>
            {cards.map((card,index) => {
                   return (
                    <a href=''>
                         <Card  key={index} sx={{ maxWidth: 330}} className='card-width'>
                        <div className='position-relative'>
                        <CardMedia
                        sx={{height: 200}}
                        image={card.image}
                        className={showButton === card.id ? 'cardImage' : ''}
                        onMouseEnter={()=>handleClick(card.id)}
                        onMouseDown={()=>handleClick(null)}
                        />
                        </div>
                        {/* <CardContent className='card-content'>
                        <Typography gutterBottom variant="h6" component="div">
                        {card.title}
                        </Typography>
                        <a href={card.path} className='link'>
                            {card.link}
                            <span><CallMadeIcon className='fs-5 ms-1'/></span>
                        </a>
                        </CardContent> */}
                    </Card>
                    </a>
                 )
            })}
            </div>
            </div>
        </div>
    )
}