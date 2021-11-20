import React from "react";
import ProjectsData from "./ProjectsData.json";
import Project from "./Project";

import { Link } from "react-router-dom";

import Bounce from 'react-reveal/Bounce'; 

function Projects() {

    let counter = 0;

    return (
        <div id="projects">
            <h1 className="sectionTitlePrimary">
                My projects
            </h1>
            
            <div id="projectsList">
            
                {ProjectsData.map((projectInfo, index) => {

                    //Only show first 4 projects. The rest are in more projects.
                    counter++;
                    if (counter <= 4) {
                        return (
                            <Bounce bottom>                                
                            <Project
                                img={projectInfo.img}
                                altTxt={projectInfo.altTxt}
                                category={projectInfo.category}
                                description={projectInfo.description}
                                linkRepo={projectInfo.linkRepo}
                                linkWebsite={projectInfo.linkWebsite} 
                            />      
                            </Bounce>                           
                        );
                    }
                    else {
                        return (null);
                    }
                })}
               
            </div>
            
                <Link id="moreProjectsLink" to="/more-projects">                    
                    
                        More projects
                    
                </Link>
            
        </div>
    );
}

export default Projects;