import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fly_img from '../assets/img/projects/fly_img.webp';
import truecare_img from '../assets/img/projects/Truecare_img.webp';
import atm_img from '../assets/img/projects/atm_img.webp';
import edu_img from '../assets/img/projects/edu_img.webp';
import tile_img from '../assets/img/projects/tile_img.webp';
import colorSharp2 from "../assets/img/color-sharp2.png";



export const Projects = () => {
    const projects = [
        {
            title:"FlyWheel Rent a Car",
            description: " Rent a car servise website",
            tech: 'Python | Django |PostgreSQL | Bootstrap | AWS | Stripe | Heroku',
            imgUrl: fly_img,
            live_link: 'https://fly-wheel-rent-c4406dadb89b.herokuapp.com/',
            git_link:'https://github.com/EbyChacko/fly_wheel_rent_a_car',
        },
        {
            title:"True Care Hospital",
            description: "Patient appointment management system for a hospital",
            tech: 'Python | Django |PostgreSQL | Bootstrap | Heroku',
            imgUrl: truecare_img,
            live_link: 'https://true-care-hospital-8dee2f42b5aa.herokuapp.com/',
            git_link:'https://github.com/EbyChacko/true-care',
        },
        {
            title:"ATM Automation",
            description: "Basic python program for an ATM",
            tech: 'Python | Heroku',
            imgUrl: atm_img,
            live_link: 'https://atm-automation-56428b57995b.herokuapp.com/',
            git_link:'https://github.com/EbyChacko/atm_automation',
        },
        {
            title:"Edu-Fun Zone",
            description: "Calculator and Tic_Tac_Toe Game",
            tech: 'JavaScript | HTML | CSS',
            imgUrl: edu_img,
            live_link: 'https://ebychacko.github.io/project2_game/index.html',
            git_link:'https://github.com/EbyChacko/project2_game',
        },
        {
            title:"Tile's World",
            description: "Static website for a Tile shop",
            tech: 'HTML | CSS',
            imgUrl: tile_img,
            live_link: 'https://ebychacko.github.io/project1_TilesWorld/',
            git_link:'https://github.com/EbyChacko/project1_TilesWorld',
        },
    ];
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <div >
                            <h2>PROJECTS</h2>
                            <p>Throughout my development journey, I’ve built several projects that demonstrate my skills in full-stack development. Each project reflects my ability to integrate back-end logic with dynamic front-end interfaces, delivering seamless and user-friendly experiences.</p>
                            <Row className="row justify-content-center">
                                {
                                projects.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
        
    )
}