import React from "react";
import ProjectsData from "./ProjectsData.json";

import Bounce from 'react-reveal/Bounce'; 

function Projects() {
    return (
        <div id="projects">
            <h1 className="sectionTitlePrimary">
                My projects
            </h1>
            <div id="projectsList">
                {ProjectsData.map((projectInfo, key) => {
                    return (
                        <Bounce bottom >
                            <div>
                                <div className="project">
                                    <img className="projectImage" src={projectInfo.img} alt={projectInfo.altTxt} />
                                        <div className="projectInfo">
                                            <div className="projectText">
                                                {projectInfo.description}
                                                <br /><br />
                                                <a href={projectInfo.linkRepo} target="_blank" rel="noopener noreferrer">
                                                    Repository >
                                                </a>
                                                <a href={projectInfo.linkWebsite} target="_blank" rel="noopener noreferrer"> 
                                                    Website >
                                                </a>
                                            </div>
                                        </div>
                                </div> 
                            </div>
                        </Bounce>

                        
                    );
                })}
            </div>
            <a id="moreProjects" href="https://github.com/therealcoolpup?tab=repositories" target="_blank" rel="noopener noreferrer">
                <h2>
                    More projects
                </h2>
            </a>
        </div>
    );
}

export default Projects;