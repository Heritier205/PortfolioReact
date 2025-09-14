import './Home.css'
import Typewriter from './type'

const Phrase = [
  "Ingénieur Logiciel",
  "Développeur Web",
  "Développeur Frontend",
  "Développeur React",
  "Développeur Full Stack",
  "Développeur Mobile",
  "Designer UI/UX"
]

const Home = ({id}) => {
    return (
        <div id={id} className="Home">
            <div className="hello">
                Salut <span>{">>"}</span>
            </div>
            <div className='name'><span>MOI C'EST</span> <div>ADAKANOU Héritier</div></div>
            <div className="Description">
                <div className='domain' > <Typewriter Phrase={Phrase} className={'domain'} /> <span>{">"}</span></div>
                <a href="#GetProject">Get a project</a>
            </div>
        </div>
    )
}

export default Home