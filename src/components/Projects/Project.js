import React from 'react'

function Project(props) {
    return (
        <div key={props.altTxt} className="project">
            <img className="projectImage" src={props.img} alt={props.altTxt} />
                <div className="projectInfo">
                    <div className="projectText">
                        <h4>{props.altTxt}</h4>

                        Category: {props.category}
                        <br /><br />

                        {props.description}
                        <br /><br />
                        <a href={props.linkRepo} target="_blank" rel="noopener noreferrer">
                            Repository >
                        </a>
                        
                        <a href={props.linkWebsite} target="_blank" rel="noopener noreferrer"> 
                            Website >
                        </a>
                    </div>
                </div>                
        </div> 
    )
}

export default Project
