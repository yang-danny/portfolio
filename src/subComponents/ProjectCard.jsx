import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
const ProjectCard = (props) => {
    const { name, imgSrc, tech, figmaLink, webLink,gitHubLink } = props;
  return (
    <div className="projectCard code">
        <div className="imageContainer">
        <img src={imgSrc} alt="" className="Project Image"/>
        </div>
        <h2>{name}</h2>
        <h4>Tech Stack</h4>
        <p>{tech}</p>
    <div className="projectLinks">
    <a target='_blank'  rel="noopener noreferrer" href={figmaLink}><PiFigmaLogoFill /></a>
    <a target='_blank'  rel="noopener noreferrer" href={webLink}><FaGlobe /></a>
    <a target='_blank'  rel="noopener noreferrer" href={gitHubLink}><BsGithub /></a>
    </div>
    </div>
  )
}

export default ProjectCard
