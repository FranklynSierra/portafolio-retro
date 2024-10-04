import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

export default function Skils() {
  const {contextTheme}=useThemeContext()
  return (
    <div className='skils'id='skill'>
      <h1>My Skills<i className="nes-icon trophy is-large"></i></h1>

      <div className='subSkills'>
        <div >
    
         
          <div className='skill'>
          <div className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'}>
            <p className="title">Skills</p>
            <p><span className="nes-text is-error ">Html</span> <span className="nes-text is-primary">CSS</span> <span className="nes-text is-warning">Javascript</span> <span className="nes-text "style={{color:'#00C6F7'}}>React</span> <span className="nes-text is-error">Angular</span> <span style={{ color: '#C76494' }} className="nes-text ">Sass</span> <span style={{ color: '#6A10ED' }} className="nes-text ">Bootstrap</span></p>
          </div>
          </div>
          <br/>
         <div className='skill'>
          <div className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'}>
            <p className="title titleProgram">Software/Programs</p>
            <p><span className="nes-text is-primary">Visual Studio Code</span> <span style={{ color: '#E94E31' }} className="nes-text ">Git</span> <span style={{ color: '#5968BA' }} className="nes-text ">GitHub</span> </p>
          </div>
          </div>
          <br/>
         <div className='skill'>
          <div className={contextTheme?'nes-container is-dark with-title ':'nes-container with-title is-centered'}>
            <p className="title">I'm learning</p>
            <p><span style={contextTheme?{color:'#D47131'}:{color:'#313131'}} className="nes-text is-disabled">SQL</span> <span className="nes-text is-primary">Python</span></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
