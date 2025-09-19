import { GitHubIcon, LinkedInIcon, InstagramIcon, TwitterIcon } from "./Icons";
import { WebIcon, ElectronicsIcon, UXIcon, PenToolIcon } from "./Icons";
import { HtmlIcon, CssIcon, JsIcon, BootstrapIcon, ReactIcon, GitIcon, NodeJsIcon, PhotoShopIcon, IllustratorIcon, CanvaIcon, FigmaIcon, ProteusIcon, ArduinoIcon, CplusIcon} from "./Icons";
import { project1 } from './ProjectImages';

export const socialData = [
    {
        id: 4,
        name: "Instagram",
        url: "https://www.instagram.com/herit_ier205?igsh=cW42bHZpcDh0bG4x&utm_source=qr",
        icon: InstagramIcon,
    },
    {
        id: 1,
        name: "Twitter",
        url: "https://x.com/hritierada16086?s=11",
        icon: TwitterIcon,
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/randomuser/",
        icon: LinkedInIcon,
    },
    {
        id: 3,
        name: "GitHub",
        url: "https://github.com/Heritier205",
        icon: GitHubIcon
    },
];

export const Sections = {
    About: "Mon portfolio",
    Services: "Mes services / offres",
    Projects: "Projets Travaillés",
    LifeJourney: "Mon parcours",
    Skills: "Mes compétences"
}

export const Info = [
    {
        title: "Contacts",
        content: ["(228) 98-50-14-60", "(228) 93-25-42-31"]
    },
    {
        title: "Langues parlées",
        content: ["Francais parler-Lire-Ecrire ", "English Speak-Read-Write", "Mina Language maternelle"]
    },
    {
        title: "Passions",
        content: ["Musique", "BasketBall", "FootBall", "Voyages"]
    }
]


export const services = [
    {
        logo: WebIcon,
        Title: "Développement Web",
        tools: [HtmlIcon, CssIcon, JsIcon, BootstrapIcon, ReactIcon, NodeJsIcon, GitIcon],
        description: `Je conçois des sites web modernes, responsives et 
                    dynamiques avec HTML, CSS, JavaScript et React sans 
                    oublier certains frameworks comme bootstrap etc ... 
                    J’accorde une grande importance à la structure du code,
                    à la cohérence visuelle et à la fluidité de navigation. 
                    Mon objectif est de proposer des interfaces à la fois 
                    esthétiques et simples à utiliser.`
    },
    {
        logo: PenToolIcon,
        Title: "Conception graphique",
        tools: [FigmaIcon, CanvaIcon, PhotoShopIcon, IllustratorIcon,],
        description: `Je conçois des designs modernes et percutants pour le 
                    web et le print, en mettant l’accent sur l’esthétique, 
                    la lisibilité et l’expérience utilisateur. Que ce soit
                    pour des interfaces, des logos, des supports marketing
                    ou des illustrations, j’allie créativité et cohérence 
                    visuelle pour des résultats uniques et efficaces.`
    },
    {
        logo: UXIcon,
        Title: "Expérience Utilisateur",
        tools: [FigmaIcon],
        description: `J’optimise l’expérience utilisateur pour que chaque 
                    visiteur puisse naviguer facilement et atteindre ses 
                    objectifs sur vos sites ou applications. De l’audit UX
                    à la création de wireframes, en passant par les tests 
                    utilisateurs et les recommandations d’amélioration, je 
                    m’assure que chaque interface est intuitive, cohérente 
                    et accessible à tous.`
    },
    {
        logo: ElectronicsIcon,
        Title: "Électronique et hardware",
        tools: [ProteusIcon, ArduinoIcon, CplusIcon],
        description: `Passionné par l’électronique et la robotique, j’ai 
                    réalisé plusieurs projets personnels combinant circuits 
                    et petits prototypes robotiques. Ces expériences m’ont 
                    permis de développer ma compréhension du hardware, de 
                    la programmation embarquée et de la conception de 
                    systèmes interactifs.`
    }
]

export const projects = [
    {
        title: "Project Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: project1
    },
    {
        title: "Project Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: project1
    }
]


export const journey = [
    {
        field: "Électronique",
        title: "Baccalauréat Électronique",
        place: "Lycée Technique ISSET tsévié",
        period: "2021 - 2024",
        description: "Spécialisation en électronique et électricité appliquée. Réalisation de projets pratiques comme un générateur de code pour matrice LED, qui m’a initié à la programmation et renforcé mon intérêt pour l’informatique."
    },
    {
        field: "Université",
        title: "Licence Professionnelle en Génie Logiciel",
        place: "Université de Lomé",
        period: "2024 - Présent",
        description: "Formation axée sur l’algorithmique, la programmation, les bases de données et la modélisation avec Merise. Ces enseignements constituent la fondation de mon parcours en développement logiciel."
    },
    {
        field: "Dev Web",
        title: "Projets personnels et universitaires",
        place: "Lomé",
        period: "2024 - Présent",
        description: "Création d’applications web avec HTML, CSS et JavaScript. Réalisation d’un agenda interactif (daily scheduler) et premières expériences avec React pour la conception de composants réutilisables."
    },
    {
        field: "Dev Mobile",
        title: "Découverte de React Native et Flutter",
        place: "Lomé",
        period: "2024 - Présent",
        description: "Exploration du développement mobile multiplateforme avec React Native et Flutter/Dart. Apprentissage de la conception d’interfaces modernes et de l’intégration de fonctionnalités interactives."
    }
]


// export const skills = ["JavaScript", , "HTML", "CSS", "React", "C", "PHP"];
export const skills = [
    { name: "Python", level: 40 },
    { name: "CSS", level: 75 },
    { name: "C++", level: 20 },
    { name: "JavaScript", level: 65 },
    { name: "PHP", level: 30 },
    { name: "C", level: 45 },
    { name: "Github", level: 70 },
    { name: "HTML", level: 80 },
    { name: "React JS", level: 60 },
    { name: "Figma", level: 65 },
    { name: "Photoshop", level: 35 },
    { name: "Illustrator", level: 50 }
];


export const skillsText = `Étudiant passionné par le développement, je conçois des projets web 
                            et mobiles en alliant créativité et sens pratique. J’aime apprendre 
                            de nouvelles technologies et renforcer mes compétences à travers des 
                            réalisations concrètes. Mon objectif est de créer des solutions
                            modernes, performantes et adaptées aux besoins des utilisateurs.`
export const positions = [
    { top: "10%", left: "20%" },
    { top: "20%", left: "60%" },
    { top: "65%", left: "10%" },
    { top: "40%", left: "50%" },
    { top: "50%", left: "10%" },
    { top: "60%", left: "40%" },
    { top: "70%", left: "70%" },
    { top: "80%", left: "20%" },
    { top: "15%", left: "40%" },
    { top: "35%", left: "15%" },
    { top: "55%", left: "75%" },
    { top: "85%", left: "55%" }
];