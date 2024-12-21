import './HomeSection.css';
import profile from '../../assets/profile.jpg';
import { Button } from "@mui/material";

export default function HomeSection() {
    return (
        <div className="home-parent-container">
            <div className="home-sub-container">
            <div className="home-container"  id='home'>
            <div className="introduce-div first-col-div">
                <h1>Hello, I'm Kyi Thar Soe</h1>
                <h2><span>front-End</span> web developer</h2>
                <p>I am someone who is passionate  about creating websites and web applications that are desirable, feasible and viable.</p>
                <Button variant="contained"
                href='#contactFoot'
                className='getInTouch-btn'
                sx={{
                    textTransform: 'capitalize',
                    ':hover': {background: 'transparent',color: '#191919',border: '1px solid #191919',boxShadow: 'none'}}}>
                <span className="getInTounch-txt">get in touch</span>
                </Button>
            </div>
            <div className="img-div sec-col-div">
              <img src={profile} alt='profile'/>
            </div>
        </div>
        </div>
        </div>
    )
}