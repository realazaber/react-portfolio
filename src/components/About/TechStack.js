import React from 'react'
import TechStackData from "./TechStack.json";

function TechStack() {

    return (
        <div id="techStack">
            {
                TechStackData.map((techStackInfo, index) => {
                    
                    let imgUrl = techStackInfo.img;
                    return (
                        
                        <div className="technology">
                        <img src={ techStackInfo.img } alt= { techStackInfo.title } />
                            <b>{techStackInfo.title}</b>
                        </div>
                        
                    )
                })
            }
        </div>
    );




}

export default TechStack;
