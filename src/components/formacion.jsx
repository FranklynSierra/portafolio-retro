import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

export default function Formacion() {
    const {contextTheme}=useThemeContext()
    
    return (
        <div id='freecode' className='freecode'>
            <h1  style={{textAlign:'center'}}>Certificates<i className="snes-logo"></i></h1>
            <div className='educationMain'>
                <div>
                    <div style={{marginBottom:'50px'}} className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'} >
                        <p className="title">Responsive Web Design</p>
                        <p>This is the certificate related to html and css and responsive web</p>
                        <a href='https://www.freecodecamp.org/certification/fcc4dfb623c-8145-48d0-996d-e1b0ad587de2/responsive-web-design' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-primary">View Certificate</button></a>
                    </div>
                    <div style={{marginBottom:'50px'}} className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'} >
                        <p className="title">Javascript</p>
                        <p>This is the javascript certificate, learning knowledge of the DOM, OPP, apis and fetch, etc...</p>
                        <a href='https://www.freecodecamp.org/certification/fcc4dfb623c-8145-48d0-996d-e1b0ad587de2/javascript-algorithms-and-data-structures' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-success">View Certificate</button></a>
                    </div>
                    <div style={{marginBottom:'50px'}} className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'} >
                        <p className="title">Front End Libreries</p>
                        <p>This certificate is related to web environment libraries, the main focus is React, one of the most used on the market along with Angular and Vue, as well as other CSS frameworks such as Bootstrap and SASS</p>
                        <a href='https://www.freecodecamp.org/certification/fcc4dfb623c-8145-48d0-996d-e1b0ad587de2/front-end-development-libraries' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-error">View Certificate</button></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
