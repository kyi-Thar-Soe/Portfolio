import './AboutSection.css';
import aboutProfile from '../../assets/aboutMe.png';

export default function AboutSection() {
    return (
        <div className="home-parent-container">
            <div className="home-sub-container">
            <div className="about-container" id='about'>
            <div className='aboutImg-div'>
            <img src={aboutProfile} alt="about"/>
            </div>

            <div className='about-info'>
            <h6>About</h6>
            <h3>About Me</h3>
            <div className='para'>
            <p>Hello, my name is Kyi Thar Soe. I'm 22 years old. My education background is that I studied IT major at Mawlamyine University of Technology. At present, I haven't yet graduated. During this period, my journey in web development began with a curiosity for the ever-evolving world of technology, and it has since transformed into a profound love for crafting beautiful and functional websites.<br/>I have 1 year experience in this field. I have a deep understanding of HTML, CSS, and JavaScript, and I'm skilled in various modern frameworks and libraries like React, Bootstrap and Tailwind CSS. And, I'm familiar with Restfuls API and Git in version control system. I have basic knowledge in Node.js. In addition, I know about Design System and UX Research related to aspects of Web Design. Then, I have certificates and achievement related to Web Development, React and UI/UX Web Design. I have done projects
            such as E-commerce, Admin Dashboard, Movie App, Education Platform and others.
            As for the Education Platform, I worked together with a team. And, we won the best prize with this project.<br/>Beyond code, I'm a firm believer in the importance of collaboration and communication. I thrive in interdisciplinary teams and enjoy translating complex technical concepts into layman's terms, fostering effective project management and problem-solving. When I'm not immersed in code, you can find me experimenting with new design tools, attending tech meetups, or contributing to open-source projects. I'm excited to tackle new challenges, bring fresh ideas to the table, and create intuitive web experiences that leave a lasting impression.</p>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}