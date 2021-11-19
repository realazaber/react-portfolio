import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import wave1 from "../../imgs/waves/1.png";

function MoreProjects() {
    return (

        <Fragment>
            <img className="upsideDown" src={wave1} width="100%" alt="wave" id="wave3" />
            <Fade bottom>
                <h1 className="sectionTitlePrimary">
                    More projects
                </h1>
            </Fade>
        </Fragment>
    )
}

export default MoreProjects
