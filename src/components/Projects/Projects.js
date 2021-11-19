import React from "react";
import ProjectsData from "./ProjectsData.json";

import { Link } from "react-router-dom";

import Bounce from 'react-reveal/Bounce'; 

function Projects() {
    return (
        <div id="projects">
            <h1 className="sectionTitlePrimary">
                My projects
            </h1>
            <Bounce bottom cascade>
            <div id="projectsList">
                {ProjectsData.map((projectInfo, index) => {
                    return (                                                    
                        <div className="project">
                            <img className="projectImage" src={projectInfo.img} alt={projectInfo.altTxt} />
                                <div className="projectInfo">
                                    <div className="projectText">
                                        {projectInfo.description}
                                        <br /><br />
                                        <a href={projectInfo.linkRepo} target="_blank" rel="noopener noreferrer">
                                            Repository >
                                        </a>
                                        <br />
                                        <a href={projectInfo.linkWebsite} target="_blank" rel="noopener noreferrer"> 
                                            Website >
                                        </a>
                                    </div>
                                </div>
                        </div> 
                            
                    );
                })}
                
            </div>
            </Bounce>
                <Link to="/more-projects">                    
                    <h2 id="moreProjectsLink">
                        More projects
                    </h2>                
                </Link>
            
        </div>
    );
}

export default Projects;