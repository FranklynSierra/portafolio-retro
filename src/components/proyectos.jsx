import React, { useRef } from 'react'
import { useThemeContext } from '../context/ThemeContext'
import proyecto1 from 'img/unsplash.png'
import proyecto2 from 'img/marvel.png'
import proyecto3 from 'img/hollow.png'
import proyecto4 from 'img/portafolio.png'

export default function Proyectos() {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const {contextTheme}=useThemeContext()
  function handleMove(e) {
    e.preventDefault();


    const width = ref.current.clientWidth
    const heigth = ref.current.clientHeight

    const lazerY = e.clientY
    const lazerX = e.clientX

    const yRotation = ((lazerX - width / 2) / width) * 7
    const xRotation = ((lazerY - heigth / 2) / heigth) * 7
 
    return ref.current.style.transform = `

 
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `

  }

  function handleMove2(e) {
    e.preventDefault();


    const width = ref2.current.clientWidth
    const heigth = ref2.current.clientHeight

    const lazerY = e.clientY
    const lazerX = e.clientX

    const yRotation = ((lazerX - width / 2) / width) * -7
    const xRotation = ((lazerY - heigth / 2) / heigth) * -7
   

    ref2.current.style.transform = `

  
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `

  }
  function handleMove3(e) {
    e.preventDefault();


    const width = ref3.current.clientWidth
    const heigth = ref3.current.clientHeight

    const lazerY = e.clientY
    const lazerX = e.clientX

    const yRotation = ((lazerX - width / 2) / width) * 7
    const xRotation = ((lazerY - heigth / 2) / heigth) * 7
   

    ref3.current.style.transform = `
  
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `

  }
  function handleMove4(e) {
    e.preventDefault();


    const width = ref4.current.clientWidth
    const heigth = ref4.current.clientHeight

    const lazerY = e.clientY
    const lazerX = e.clientX

    const yRotation = ((lazerX - width / 2) / width) * 7
    const xRotation = ((lazerY - heigth / 2) / heigth) * 7
    
    return ref4.current.style.transform = `

 
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `

  }

  function mouseaout() {
    ref.current.style.transform = ` 

  rotateX(0deg)
  rotateY(0deg)`
    ref2.current.style.transform = ` perspective(500px)
  
  rotateX(0deg)
  rotateY(0deg)`
    ref3.current.style.transform = ` perspective(500px)
  
  rotateX(0deg)
  rotateY(0deg)`
    ref4.current.style.transform = ` perspective(500px)
  
  rotateX(0deg)
  rotateY(0deg)`
  }

  return (
    <div id='proyects'  className='principalProyect' >
     <div>
      <h1 style={{ textAlign: 'center' }}>My proyects<i className="nes-icon is-large star"></i></h1>
      <div className='mainProject'>
        <div>
          <div className='proyects'>

            <div className={contextTheme?'proyecto-1 nes-container is-dark with-title':'proyecto-1 nes-container with-title is-centered'} >
              <p className="title">Unsplah Copy</p>
              <img src={proyecto1} alt='proyect' className='proyecto' onMouseOut={mouseaout} onMouseMove={handleMove} ref={ref}/>
              <p> <span className="nes-text is-error ">Html</span> <span className="nes-text is-primary">CSS</span> <span className="nes-text " style={{ color: '#00C6F7' }}>React</span> <span className="nes-text is-warning" >Javascript</span></p>
              <p>to search and download all types of images with the unsplash api</p>
              <a href='https://franklynsierra.github.io/unsplash-page-copy/' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-primary">Visit Page</button></a>
              <a href='https://github.com/FranklynSierra/unsplash-page-copy' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-error">Repository</button></a>
            </div>
            <div className={contextTheme?'proyecto-2 nes-container is-dark with-title':'proyecto-2 nes-container with-title is-centered'}>
              <p className="title">Marvel Web</p>
              <img src={proyecto2} alt='proyect' className='proyecto' onMouseOut={mouseaout} onMouseMove={handleMove2} ref={ref2}/>
              <p> <span className="nes-text is-error ">Html</span> <span className="nes-text is-primary">CSS</span> <span className="nes-text " style={{ color: '#00C6F7' }}>React</span></p>
              <p>search for everything related to marvel, comics, characters, events, etc..., with the marvel api</p>
              <a href='https://franklynsierra.github.io/marvel/' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-primary">Visit Page</button></a>
              <a href='https://github.com/FranklynSierra/marvel' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-error">Repository</button></a>
            </div>


          </div>
          <div className='proyects'>
            <div className={contextTheme?'proyecto-3 nes-container is-dark with-title':'proyecto-3 nes-container with-title is-centered'}>
              <p className="title">Hollow Knight</p>
              <img src={proyecto3} alt='proyect' className='proyecto' onMouseOut={mouseaout} onMouseMove={handleMove3} ref={ref3}/>
              <p> <span className="nes-text is-error ">Html</span> <span className="nes-text is-primary">CSS</span> <span className="nes-text " style={{ color: '#00C6F7' }}>React</span> <span className="nes-text is-warning" >Javascript</span></p>
              <p>a copy of the original hollow knight page by team cherry, adding other css styles and javascript</p>
              <a href='https://franklynsierra.github.io/hollow-knight-Page/' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-primary">Visit Page</button></a>
              <a href='https://github.com/FranklynSierra/hollow-knight-Page' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-error">Repository</button></a>
            </div>

            <div className={contextTheme?'proyecto-4 nes-container is-dark with-title':'proyecto-4 nes-container with-title is-centered'}>
              <p className="title">Last Portafolio</p>
              <img src={proyecto4}alt='proyect' className='proyecto' onMouseOut={mouseaout} onMouseMove={handleMove4} ref={ref4}/>
              <p> <span className="nes-text is-error ">Html</span> <span style={{ color: '#C76494' }} className="nes-text ">Sass</span> <span className="nes-text is-warning" >Javascript</span></p>
              <p>my first portfolio with projects of all kinds that I did watching videos on YouTube or courses</p>
              <a href='https://franklynsierra.github.io/franklyn-portafolio/' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-primary">Visit Page</button></a>
              <a href='https://github.com/FranklynSierra/franklyn-portafolio' rel="noopener noreferrer" target='_blank'><button type="button" className="nes-btn is-error">Repository</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
