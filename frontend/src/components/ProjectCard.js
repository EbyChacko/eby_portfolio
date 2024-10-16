import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, imgUrl,live_link, git_link }) => {
  return (
    <Col size={12} md={6} xl={4} className="projects-card">
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <br></br>
            <a href={live_link} target="_blank" rel="noopener noreferrer">
            <button className="live-btn">Live</button>
            </a>
            <a href={git_link} target="_blank" rel="noopener noreferrer">
            <button className="live-btn">GitHub</button>
            </a>
            </div>
        </div>
        <h4>{title}</h4>
        <h5>{tech}</h5>
    </Col>
  )
}

