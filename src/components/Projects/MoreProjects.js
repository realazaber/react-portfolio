import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


import Fade from 'react-reveal/Fade';
import wave1 from "../../imgs/waves/1.png";

function MoreProjects() {
    return (

        <Fragment>
            <img className="upsideDown" src={wave1} width="100%" alt="wave" id="wave3" />

            <div id="moreProjectsHeading">

                <Fade bottom>
                    <h1 className="sectionTitlePrimary">
                        More projects
                    </h1>
                </Fade>
            </div>
            <Link to="/">
                <button id="btnBack">
                    Back
                </button>
            </Link>


            {/* Load all projects */}
            <div id="moreProjectsNav">
                <button className="btnProjectsNav">
                    All
                </button>


            </div>

        </Fragment>
    )
}

export default MoreProjects
