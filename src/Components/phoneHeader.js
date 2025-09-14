import './phoneHeader.css'
import { socialData } from '../Data/Constants';
import { EmailIcon } from '../Data/Icons';

const PhoneHeader = () => {
    return (
        <div className="PhoneHeader">
            <div className='Container'>
                <div className="Socials">
                    {socialData.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <div key={index} className="links">
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <Icon className="PhoneLinks-icon" />
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className="Mail">
                    <a href="mailto:heritieradakanoutg@gmail.com" target="_Blank" rel="noopener noreferrer" className="PhoneMail"> <EmailIcon/></a>
                </div>
            </div>
        </div>
    )
}

export default PhoneHeader