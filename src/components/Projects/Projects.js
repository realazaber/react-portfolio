import React from "react";
import ProjectsData from "./ProjectsData.json";

import { Link } from "react-router-dom";

import Bounce from 'react-reveal/Bounce'; 

function Projects() {

    let counter = 0;

    return (
        <div id="projects">
            <h1 className="sectionTitlePrimary">
                My projects
            </h1>
            <Bounce bottom cascade>
            <div id="projectsList">
                {ProjectsData.map((projectInfo, index) => {

                    //Only show first 4 projects. The rest are in more projects.
                    counter++;
                    if (counter <= 4) {
                        return (                                                    
                            <div className="project">
                                <img className="projectImage" src={projectInfo.img} alt={projectInfo.altTxt} />
                                    <div className="projectInfo">
                                        <div className="projectText">
                                            Category: {projectInfo.category}
                                            <br /><br />

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
                    }
                    else {
                        return (null);
                    }



                    
                })}
                
            </div>
            </Bounce>
                <Link id="moreProjectsLink" to="/more-projects">                    
                    
                        More projects
                    
                </Link>
            
        </div>
    );
}

export default Projects;