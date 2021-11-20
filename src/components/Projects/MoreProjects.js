import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


import Fade from 'react-reveal/Fade';
import wave1 from "../../imgs/waves/1.png";

function MoreProjects() {

    function test() {
        alert("fart");
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
                    <button className="btnProjectsNav">
                        All
                    </button>
                    <button className="btnProjectsNav">
                        All
                    </button>
                    <button className="btnProjectsNav">
                        All
                    </button>
                    <button className="btnProjectsNav">
                        All
                    </button>
                    <button className="btnProjectsNav">
                        All
                    </button>
                </div>
            </div>
            <div id="mobileView">
                    <select id="categorySelector">
                        <option value="All">
                            All projects
                        </option>
                        <option value="Web development">
                            Web development
                        </option>
                        <option value="Application development">
                            Application development
                        </option>
                    </select>
                </div>

        </Fragment>
    )
}

export default MoreProjects
