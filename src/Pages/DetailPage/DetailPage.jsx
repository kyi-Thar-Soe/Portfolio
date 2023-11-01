import './DetailPage.css';
import { useNavigate, useParams } from "react-router";
import { cards } from "../../Data/CardData";
import { useEffect, useState } from "react";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
export default function DetailPage() {
    const [project, setProject] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
           const localData = cards;
            const selectedItem = localData.find((item) => item.id === parseInt(id));
            setProject(selectedItem);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };

    useEffect(() => {
        fetchData();
    }, [id]);
    return (
        <div>
        {project && (
            <div>
                <div className='detailInfo-div'>
                    <img src={project.backGround} alt='background-img'/>
                <div className='detailsInfo-overlay'>
                <span onClick={()=>navigate(-1)}><KeyboardBackspaceRoundedIcon/></span>
                <h1>{project.title}</h1>
                <h4>{project.overview}</h4>
                </div>
                </div>
                <div className="detailImage-div">
                {/*Single image*/}
                <div className='single-img'>
                <h3>Screen 1</h3>
                <img src={project.imageOne} alt="image"/>
                </div>
                <div className='single-img'>
                <h3>Screen 2</h3>
                <img src={project.imageTwo} alt="image"/>
                </div>
                <div className='single-img'>
                <h3>Screen 3</h3>
                <img src={project.imageThree} alt="image"/>
                </div>
                <div className='single-img'>
                <h3>Screen 4</h3>
                <img src={project.imageFour} alt="image"/>
                </div>
                </div>
            </div>
        )}
        </div>
    )
}