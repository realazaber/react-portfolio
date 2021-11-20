import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import ProjectsData from "./ProjectsData.json";

import Fade from 'react-reveal/Fade';
import wave1 from "../../imgs/waves/1.png";

function MoreProjects() {


    function displayCategory(category) {
        alert(category);
    }


    const categories = [];

    ProjectsData.map((projectInfo, index) => {
                            
        if (!categories.includes(projectInfo.category)) {
            categories.push(projectInfo.category);
        }
        return (null);
        
    })

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
                    <button className="btnProjectsNav">
                        All
                    </button>
                    {
                        categories.map((category, index) => {
                            return (
                                <button className="btnProjectsNav">
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

        </Fragment>
    )
}

export default MoreProjects
