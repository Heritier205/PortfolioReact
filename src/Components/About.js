import './About.css'
import Typewriter from './type'
import Title from './Title'
import { ReactComponent as Triangle } from '../Assets/icons/triangle.svg'
import profile2 from '../Assets/icons/profile2.png'
import { Sections, Info } from '../Data/Constants';
import useAppearOnScreen from './useOnScreen'


const Texts = [
    `Je m'appelle Héritier ADAKANOU, étudiant en première année de licence professionnelle 
    en Génie Logiciel.`,

    `Ma passion pour le développement a commencé de manière un peu inattendue : 
    c’est en découvrant le monde de l’électronique que j’ai trouvé ma voie. J’ai
    pris goût à créer, à connecter des idées et des composants… jusqu’au jour où 
     j’ai développé mon tout premier site web.`,

    `Ce site permettait de dessiner des motifs sur une matrice LED en temps réel,
     simplement en interagissant avec l’interface. C’est cette expérience qui m’a 
    véritablement donné le déclic pour me lancer dans le génie logiciel.`,

    `Depuis, je développe mes compétences en programmation web et mobile, 
    en utilisant des langages comme JavaScript, Python ou Dart, et je m’initie 
    également à React et Flutter. J’explore aussi le design d’interfaces avec Figma, 
    car je suis convaincu qu’un bon outil ne se limite pas à son fonctionnement : il 
    doit aussi être agréable à utiliser.`,

    `Je suis motivé par l’envie de créer des outils utiles, simples et accessibles. 
    Je suis également passionné par les projets concrets qui mélangent logiciel et matériel, 
    et j’aspire à devenir un développeur capable d’apporter des solutions innovantes à la 
    croisée du code et de l’électronique`
]



const About = ({ id }) => {
    const sectionRef = useAppearOnScreen();
    return (
        <div ref={sectionRef} id={id} className="About">
            <div className="toObserve Container">
                <Title Section={Sections.About} />
                <div className="toObserve Presentation">
                    <div className="toObserve story">
                        {Texts.map((Text, index) => {
                            return (
                                <div className="toObserve">
                                    <p key={index} >{Text} <br /><br /> </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="toObserve picture">
                        <img src={profile2} alt="" />
                    </div>
                </div>
                <div className="toObserve Infos">
                    {
                        Info.map((info, index) => {
                            return (
                                <div key={index} className="info">
                                    <div className="toObserve infoTitle"> <Triangle className='triangle' /> {info.title}</div>
                                    <div className="toObserve infoContent"> <Typewriter Phrase={info.content} /> </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default About