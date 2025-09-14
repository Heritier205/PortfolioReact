import './Journey.css'
import { Sections } from '../Data/Constants'
import Title from './Title'
import { journey } from '../Data/Constants'
import { useState } from 'react'
import useAppearOnScreen from './useOnScreen'

const Journey = ({id}) => {

    const [storyIndex, setStoryIndex] = useState(0);
    const sectionRef = useAppearOnScreen();
    return (
        <div ref={sectionRef} id={id} className="Journey">
            <div className="toObserve Container">
            <Title Section={Sections.LifeJourney} />
                <div className='toObserve story'>
                    <div className="toObserve VLine">
                        <div
                            className="toObserve indicator"
                            style={{ top: `${storyIndex * 30}px` }}
                        ></div>
                    </div>
                    <div className="toObserve fieldList">
                        {
                            journey.map((story, index) => {
                                return (
                                    <ol key={index} onClick={() => setStoryIndex(index)} className= {storyIndex === index ? 'ActiveList' : ""}>{story.field}</ol>
                                )
                            })
                        }
                    </div>
                    <div className="toObserve content">
                        <div className="toObserve head">
                            <div className="toObserve title">{journey[storyIndex].title}</div>
                            <div className="toObserve period">{journey[storyIndex].place} | {journey[storyIndex].period}</div>
                        </div>
                        <div className="toObserve description">{journey[storyIndex].description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey