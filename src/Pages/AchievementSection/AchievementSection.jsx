import './AchievementSection.css';
import certi1 from '../../assets/certi1.jpg';
import certi2 from '../../assets/certi2.jpg';
import certi3 from '../../assets/certi3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function AchievementSection() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className='achievement-container'>
            <h3>my achievements</h3>
            <div className="achi-img">
            <img src={certi1} alt='achi-img' data-aos='fade-up' data-aos-duration='7500'/>
            <img src={certi2} alt='achi-img' data-aos='fade-up' data-aos-duration='5000'/>
            <img src={certi3} alt='achi-img' data-aos='fade-up' data-aos-duration='2500'/>
            </div>
        </div>
    )
}