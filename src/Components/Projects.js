import './Project.css'
import { Sections } from '../Data/Constants'
import Title from './Title'
import {projects} from '../Data/Constants'
import useAppearOnScreen from './useOnScreen'


const Projects = ({ id }) => {
    const sectionRef = useAppearOnScreen();
    return (
        <div id={id} ref={sectionRef} className="Projects">
            <div className="Container toObserve">
            <Title Section={Sections.Projects} />
                <div className='Cards toObserve'>
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className='Card toObserve'>
                                    <img src={project.image} alt="project Preview" />
                                    <div className="ProjectLegend toObserve">
                                        <div className="projectTitle toObserve">{project.title}</div>
                                        <div className="projectDescription toObserve">{project.description}</div>
                                        <a href="#projectDetail" className="detail toObserve">See Detail</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <a href="#MoreProject" className="moreProject toObserve">See more projects </a>
            </div>
        </div>
    )
}



export default Projects