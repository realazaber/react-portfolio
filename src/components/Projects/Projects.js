import React from "react";
import GithubLogo from "../../imgs/icons/github.png";
import ProjectsData from "./ProjectsData.json";

import Bounce from 'react-reveal/Bounce'; 

function Projects() {
    return (
        <div id="projects">
            <h1 className="sectionTitlePrimary">
                My projects
            </h1>
            <div id="projectsList">
                {ProjectsData.map((projectInfo) => {
                    return (
                        <Bounce bottom >
                            <div>
                            <div class="project">
                            <img className="projectImage" src={projectInfo.img} alt={projectInfo.altTxt} />
                            <div className="projectInfo">
                                <div className="projectText">
                                    {projectInfo.description}
                                    <br /><br />
                                    <a href={projectInfo.linkRepo} target="_blank" rel="noopener noreferrer">
                                        <img className="github" src={GithubLogo} alt="github repo" />
                                    </a>
                                    <a href={projectInfo.linkWebsite} target="_blank" rel="noopener noreferrer"> 
                                        <img className="github" src="https://img.icons8.com/material-rounded/48/000000/external-link.png" alt="project website"/>
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