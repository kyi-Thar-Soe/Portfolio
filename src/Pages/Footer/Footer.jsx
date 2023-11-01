import './Footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import discord from '../../assets/discord.png';
export default function Footer() {
    return (
        <footer className="footer-container" id='contactFoot'>
            <h3>@ Contact Me</h3>
            <div className='social-img'>
            <a href='https://www.facebook.com'><img src={facebook} alt='facebook'/></a>
            <a href='https://www.instagram.com/kyithar.s/'><img src={instagram} alt='instagram'/></a>
            <a href='https://discord.gg/1065278536304308314'><img src={discord} alt='discord'/></a>
            </div>
        </footer>
    )
}