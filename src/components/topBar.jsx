import React, {  useRef, useState } from 'react'
import lines from './img/hamburger-icon.svg' 
import { Link } from 'react-scroll'
import { useThemeContext } from '../context/ThemeContext'

export default function TopBar() {
 
  const menu=useRef()
  const {contextTheme}=useThemeContext()
  function toggleMenu() {
    menu.current.classList.toggle("menu_opened");
    
  }
 


  function closeLink() {
    menu.current.classList.remove("menu_opened");

  }
 
  const [click, setClick] = useState(false)
    

    const closeMenu = () => setClick(false)


  return (
    <header style={contextTheme?{background:'#14171a',boxShadow : '0 4px 2px #fff'}:{background:'#fff',boxShadow : '0 4px 2px  #14171a'}} className='topheader' >

      <nav className='topnav'>
       
        <Link className='linkName' activeclass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}><p><i className="snes-jp-logo"></i>Franklyn Sierra</p></Link>
      
       <button  onClick={toggleMenu} className={contextTheme?'open-menu open nes-container is-rounded is-dark':'open-menu open nes-container is-rounded '}  aria-label='open menu'>
        <img src={lines}alt='open menu'/>
       </button>
       
        <ul ref={menu} style={contextTheme?{background:'#14171a'}:{background:'#fff'}}className={click ? "menu selected" : "menu"}>
       
        <button onClick={toggleMenu} style={contextTheme?{background:'#14171a'}:{background:'#fff'}}  className={contextTheme?'close-menu nes-container is-rounded is-dark':'close-menu  nes-container is-rounded '} aria-label='close menu'>
        <i className="nes-icon close is-large"></i>
       </button>
       
          <Link  activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}   onClick={closeMenu}  className='link'><span onClick={closeLink} >About Me</span></Link>
           <Link  activeClass="active"
            to="devathon"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}   onClick={closeMenu}  className='link'><span onClick={closeLink} >Devathon</span></Link>
         
          <Link   activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}  onClick={closeMenu}  className='link'><span onClick={closeLink} >Skills</span></Link>
          <Link   activeClass="active"
            to="proyects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}   onClick={closeMenu} className='link'><span onClick={closeLink}  >Projects</span></Link>
          <Link   activeClass="active"
            to="freecode"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}  onClick={closeMenu}  className='link'><span onClick={closeLink}  >Certificate</span></Link>
          <Link  activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}   onClick={closeMenu}  className='link'><span onClick={closeLink}  >Contact</span></Link>
        </ul>
      </nav>
    </header>
  )
}
