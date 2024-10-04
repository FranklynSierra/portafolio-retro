import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

export default function Formacion() {
    const {contextTheme}=useThemeContext()
    
    return (
        <div id='freecode' className='freecode'>
            <h1  style={{textAlign:'center'}}>Certificate<i className="snes-logo"></i></h1>
            <div className='educationMain'>
                <div>
                    <div style={{marginBottom:'50px'}} className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'} >
                        <p className="title">Responsive Web Design</p>
                        <p>This is the certificate related to html and css and responsive web</p>
                        <a href='https://www.freecodecamp.org/certification/fcc4dfb623c-8145-48d0-996d-e1b0ad587de2/responsive-web-design' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-primary">View Certificate</button></a>
              

                    </div>
                    <div className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'} >
                        <p className="title">Javascript</p>
                        <p>This is the javascript certificate, learning knowledge of the DOM, opp, apis and fetch, etc...</p>
                        <a href='https://www.freecodecamp.org/certification/fcc4dfb623c-8145-48d0-996d-e1b0ad587de2/javascript-algorithms-and-data-structures' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-success">View Certificate</button></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
