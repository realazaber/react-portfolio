import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

import ProjectsData from "./ProjectsData.json";

import Fade from 'react-reveal/Fade';
import wave1 from "../../imgs/waves/1.png";

function MoreProjects() {

    const [category, setCategory] = useState("All");

    const categories = [];

    ProjectsData.map((projectInfo, index) => {
                            
        if (!categories.includes(projectInfo.category)) {
            categories.push(projectInfo.category);
        }
        return (null);
        
    })

    function displayCategory(category) {
        return (
            <div id="projectsCategory">
                {
                    ProjectsData.map((projectInfo, index) => {

                        //If the all option is selected, show all projects.
                        if (category === "All") {
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
                            )
                        }
                        //If another category is selected then only show
                        //Projects in that category.
                        else {
                            if (projectInfo.category === category) {
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
                                )
                            }
                            else {
                                return(null);
                            }
                        }
                    })
                }
            </div>
        )
    }

    

    return (

        <Fragment>
            <img className="upsideDown" src={wave1} width="100%" alt="wave" id="wave3" />

            <div id="moreProjectsHeading">

                <Fade bottom>
                    <h1 className="sectionTitlePrimary">
                        More projects
                    </h1>
                </Fade>
                <Link to="/" id="btnBack">
                    Back
                </Link>
            </div>




            {/* Load all projects */}
            <div id="moreProjectsNav">
                <div id="desktopView">
                    <button value="All" className="btnProjectsNav" onClick={() => {setCategory("All")}}>
                        All
                    </button>
                    {
                        categories.map((category, index) => {
                            return (
                                <button className="btnProjectsNav" value={category} onClick={() => {setCategory(category)}}>
                                    {category}
                                </button>
                            )
                        })                                                
                    }


                </div>
            </div>
            <div id="mobileView">
                    <select id="categorySelector">
                        <option value="All">
                            All projects
                        </option>
                        {
                            categories.map((category, index) => {
                                return (
                                    <option value={category}>
                                        {category}
                                    </option>
                                )
                            })

                            
                        }

                    </select>
                </div>

                {
                    displayCategory(category)
                }
        </Fragment>
    )
}

export default MoreProjects
