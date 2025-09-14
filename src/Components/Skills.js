import './Skills.css'
import { Sections, skills, positions, skillsText } from '../Data/Constants'
import Title from './Title'
import { SkillsIcon } from '../Data/Icons'
import useAppearOnScreen from './useOnScreen'


const Skills = ({ id }) => {
    const sectionRef = useAppearOnScreen();
    return (
        <div id={id} ref={sectionRef} className="Skills">
            <div className="toObserve Container">
            <Title Section={Sections.Skills} />
                <div className="toObserve SkillContainer">
                    <div className="toObserve skill">
                        <div className="toObserve title"> <SkillsIcon className='SkillsIcon'/> Skills</div>
                        <hr />
                        <div className="toObserve description">{skillsText}</div>
                    </div>
                    <div className="toObserve representation">
                        {
                            skills.map((skill, index) =>
                                <span key={index} title={`${skill.level}%`} style={{ ...positions[index], fontSize: `${(skill.level / 100) * 30 + 5}px`, color: `rgb(38, 217, 74, ${skill.level + 30}%)` }} >{skill.name}</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Skills