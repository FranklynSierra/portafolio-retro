import { useRef,useEffect, useState } from 'react';
import React from 'react'

import Typed from 'typed.js';
import { useThemeContext } from '../context/ThemeContext';
import ReactSwitch from 'react-switch';

export default function Name() {
 const el=useRef(null)
 const {contextTheme}=useThemeContext()
 const {setContextTheme} = useThemeContext()
 
 const [checked, setChecked] = useState(false);
 const handleSwitch=(nex)=>{
   setContextTheme((state) => (state === true ? false:true))  
   setChecked(nex)
  
}
 useEffect(() => {
 
  const typed = new Typed(el.current, {
    strings: ['web developer','Programmer' ,'technology lover'],
    
   typeSpeed: 100,
	startDelay: 400,
	backSpeed: 75, 
	
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
  cursorChar: '<',
	contentType: 'html', 
  });

  return () => {
    // Destroy Typed instance during cleanup to stop animation
    typed.destroy();
  };
 }, []);
  return (
    <div  id='home' className='principalName '>

      <div id='secondName'className= {contextTheme?'nes-container is-rounded is-dark':'nes-container is-rounded'}>
      <ReactSwitch
onChange={handleSwitch}
checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={30}
            width={48}
            className="react-switch"
            id="material-switch"
           

/>
         <div className='text-name'>
          <h1 className='my-name'>Hi!!<i className="nes-icon coin is-medium"></i> My name is <span className="nes-text is-primary">Franklyn Sierra</span></h1>
          <h2 ><span className="nes-text is-success text buttonPagereverse"ref={el}></span> with <span className="nes-text is-error"> 3 years of experience</span> in web development</h2>
      
        </div>
        <div className='nameLinks'>
          <a href='https://www.linkedin.com/in/franklyn-enrique-sierra-contreras-3b036a230/' target='_blank' rel="noreferrer"><button type="button" className="nes-btn is-primary"><i className="nes-icon linkedin is-medium"></i></button></a>
          <a href='https://github.com/FranklynSierra' target='_blank' rel="noreferrer"><button type="button" className="nes-btn is-success"><i className="nes-icon github is-medium"></i></button></a>
          {/* <a href='franklynssierracontreras@gmail.com' target='_blank'><button type="button" class="nes-btn is-error"><i class="nes-icon gmail is-medium"></i></button></a> */}
        </div>
      </div>
    </div>
  )
}
