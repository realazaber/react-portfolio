import React from 'react';

import Zoom from 'react-reveal/Zoom';

function Contact() {
    return (
        <div>
            <svg className="wave" viewBox="0 0 1440 130" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(11, 255, 246.735, 1)" offset="0%"></stop><stop stop-color="rgba(62, 120.375, 243, 1)" offset="100%"></stop></linearGradient></defs><path className="wavePath" fill="url(#sw-gradient-0)" d="M0,65L80,71.5C160,78,320,91,480,93.2C640,95,800,87,960,71.5C1120,56,1280,35,1440,28.2C1600,22,1760,30,1920,28.2C2080,26,2240,13,2400,26C2560,39,2720,78,2880,84.5C3040,91,3200,65,3360,49.8C3520,35,3680,30,3840,32.5C4000,35,4160,43,4320,58.5C4480,74,4640,95,4800,86.7C4960,78,5120,39,5280,34.7C5440,30,5600,61,5760,73.7C5920,87,6080,82,6240,71.5C6400,61,6560,43,6720,45.5C6880,48,7040,69,7200,65C7360,61,7520,30,7680,32.5C7840,35,8000,69,8160,82.3C8320,95,8480,87,8640,75.8C8800,65,8960,52,9120,47.7C9280,43,9440,48,9600,58.5C9760,69,9920,87,10080,97.5C10240,108,10400,113,10560,95.3C10720,78,10880,39,11040,36.8C11200,35,11360,69,11440,86.7L11520,104L11520,130L11440,130C11360,130,11200,130,11040,130C10880,130,10720,130,10560,130C10400,130,10240,130,10080,130C9920,130,9760,130,9600,130C9440,130,9280,130,9120,130C8960,130,8800,130,8640,130C8480,130,8320,130,8160,130C8000,130,7840,130,7680,130C7520,130,7360,130,7200,130C7040,130,6880,130,6720,130C6560,130,6400,130,6240,130C6080,130,5920,130,5760,130C5600,130,5440,130,5280,130C5120,130,4960,130,4800,130C4640,130,4480,130,4320,130C4160,130,4000,130,3840,130C3680,130,3520,130,3360,130C3200,130,3040,130,2880,130C2720,130,2560,130,2400,130C2240,130,2080,130,1920,130C1760,130,1600,130,1440,130C1280,130,1120,130,960,130C800,130,640,130,480,130C320,130,160,130,80,130L0,130Z"></path></svg>
            
            <div id="contact">
                <h1 className="sectionTitleSecondary">
                    Contact me
                </h1>
                <Zoom>
                    <form id="contactForm" action="https://formspree.io/f/xqkwvwdg" method="post">
                        <label for="Name">Name *</label>
                        <br />
                        <input className="inputField" type="text" name="Name" required />
                        <br />
                        <label for="Email">Email *</label>
                        <br />
                        <input className="inputField" type="email" name="Email" required />
                        <br />
                        <label for="Phone">Phone </label>
                        <br />
                        <input className="inputField" type="number" name="Number" required />
                        <br />
                        <label for="Message">Message *</label>
                        <br />
                        <textarea className="inputField" id="" cols="30" rows="6" name="Message"></textarea>
                        <br />
                        <button className="inputField" id="btnSubmit" type="submit">
                            Submit
                        </button>    
                    </form>
                </Zoom>
            </div>
        
        </div>
    );
}

export default Contact;