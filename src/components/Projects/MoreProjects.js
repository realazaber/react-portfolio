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
                                <h1>{projectInfo.description}</h1>
                            )
                        }
                        //If another category is selected then only show
                        //Projects in that category.
                        else {
                            if (projectInfo.category === category) {
                                return (
                                    <h1>{projectInfo.description}</h1>
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
                    <button value="All" className="btnProjectsNav">
                        All
                    </button>
                    {
                        categories.map((category, index) => {
                            return (
                                <button className="btnProjectsNav" value={category}>
                                    {category}
                                </button>
                            )
                        })
                        

                        
                    }
                    {
                        displayCategory(category)
                    }

                </div>
            </div>
            <div id="mobileView">
                    <select id="categorySelector">
                        <option value="All" onChange={() => {
                            alert("I farted");
                        }}>
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

        </Fragment>
    )
}

export default MoreProjects
