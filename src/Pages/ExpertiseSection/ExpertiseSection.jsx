import './ExpertiseSection.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/bootstrap.png';
import mui from '../../assets/mui.png';
import nodeJs from '../../assets/nodeJs.png';
import git from '../../assets/git.png';
import figma from '../../assets/figma.png';
import CodeIcon from '@mui/icons-material/Code';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import{  Card, CardContent } from '@mui/material';

export default function ExpertiseSection() {
    return (
            <div className="home-sub-container">
                <div className='expertise-container'>
                <h6>my skills</h6>
                <h3>my expertise</h3>
                <p>The skills, tools and technologies I am really good at:</p>
                <div className='expertise-section'>
                    <Card className='logo-div'>
                        <CardContent className='card-div'>
                            <div className='code-icon'>
                            <CodeIcon className='ms-2 my-2'/>
                            </div>
                            <h2>front-End </h2>
                            <div className='d-flex justify-content-evenly'>
                            <a href='https://html.com'><img src={html} alt='logo'/></a>
                            <a href='https://web.dev/learn/css'><img src={css} alt='logo' style={{width: '50px', height: '40px', marginTop: '-6px'}}/></a>
                            <a href='https://www.javascript.com/'><img src={javascript} alt='logo'/></a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='logo-div' sx={{ minWidth: 200}}>
                        <CardContent className='card-div'>
                            <div className='code-icon'>
                            <SupportOutlinedIcon className='ms-2 my-2'/>
                            </div>
                            <h2>framework & libaries</h2>
                            <div className='d-flex justify-content-evenly'>
                            <a href='https://react.com/'><img src={react} alt='logo'/></a>
                            <a href='https://tailwindcomponents.com/'><img src={tailwind} alt='logo'/></a>
                            <a href='https://getbootstrap.com/'><img src={bootstrap} alt='logo'/></a>
                            <a href='https://mui.com/'><img src={mui} alt='logo'/></a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='logo-div' sx={{ minWidth: 200}}>
                        <CardContent className='card-div'>
                            <div className='code-icon'>
                            <CodeIcon className='ms-2 my-2'/>
                            </div>
                            <h2>server-side</h2>
                            <a href='https://nodejs.org/en'><img src={nodeJs} alt='logo' className='ms-2'/></a>
                        </CardContent>
                    </Card>
                    <Card className='logo-div' sx={{ minWidth: 200}}>
                        <CardContent className='card-div'>
                            <div className='code-icon'>
                            <SettingsSuggestOutlinedIcon className='ms-2 my-2'/>
                            </div>
                            <h2>version control system</h2>
                            <a href='https://git.com/'><img src={git} alt='logo' className='ms-2'/></a>
                        </CardContent>
                    </Card>
                    <Card className='logo-div' sx={{ minWidth: 200}}>
                        <CardContent className='card-div'>
                            <div className='code-icon'>
                            <BrushOutlinedIcon className='ms-2 my-2'/>
                            </div>
                            <h2>uI & uX web design</h2>
                            <a href='https://www.figma.com/'><img src={figma} alt='logo'/></a>
                        </CardContent>
                    </Card>
                </div>
                </div>
            </div>
    )
}