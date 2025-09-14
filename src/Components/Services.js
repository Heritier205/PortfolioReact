import './Services.css'
import Title from './Title'
import { Sections, services } from '../Data/Constants';
import { useState } from 'react';
import useAppearOnScreen from './useOnScreen';



const Services = ({ id }) => {
    const [ServiceIndex, SetServicesIndex] = useState(0)
    const [direction, setDirection] = useState("top")

    const changeService = (i) => {
        if (i === -1) {
            setDirection('left')
            SetServicesIndex((prev) => { return prev ? prev + i : services.length - 1 })
        } else {
            setDirection('right')
            SetServicesIndex((prev => { return prev < services.length - 1 ? prev + i : 0 }))
        }
        // SetServicesIndex((prev)=> prev+i)
    }

    const Logo = services[ServiceIndex].logo
    // const ServiceTitle = services[ServiceIndex].Title

    const sectionRef = useAppearOnScreen();

    return (
        <div ref={sectionRef} id={id} className="Services">
            <div className="toObserve container">
                <Title Section={Sections.Services} />
                <div className="Offers" key={ServiceIndex}>
                    <button onClick={() => changeService(-1)}>{"<"}</button>
                    <div className="representationDescription">
                        <div className={"Representation"}>
                            <div>
                                <div className={`title ${direction}`}>
                                    <Logo className='toObseve Logo' />
                                    {services[ServiceIndex].Title}
                                </div>
                                <hr />
                                <div className={`tools ${direction}`}>
                                    {
                                        services[ServiceIndex].tools.map((img, index) => {
                                            return (
                                                <img key={index} src={img} alt="" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`Description ${direction}`}>{services[ServiceIndex].description}</div>
                    </div>
                    <button onClick={() => changeService(1)} >{">"}</button>
                </div>
                <div className="Phone">
                    <button onClick={() => changeService(-1)}>{"<"}</button>
                    <button onClick={() => changeService(1)} >{">"}</button>
                </div>
                <div className="toObserve NumeroService">{`Service ${ServiceIndex + 1}/${services.length}`}</div>
            </div>
        </div>
    )
}

export default Services