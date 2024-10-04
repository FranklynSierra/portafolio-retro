import React from 'react'
import {  useThemeContext } from '../context/ThemeContext'

export default function SobreMi() {
  const {contextTheme}=useThemeContext()
 
  return (


    <div className='about' id='about'>
      <div>
        <h1 className="title" style={{ textAlign: 'center' }}>About Me<i className="nes-icon is-medium heart"></i></h1>

        <div className={contextTheme?'nes-container is-rounded is-dark':'nes-container is-rounded'}>

          <br />


          <h2>First Steps</h2>
          <p> I started programming when I was barely 14 years old, I started with c++, but I decided on html, css and javascript </p><br />
           <h2>Why did I learn programming?</h2>
           <p>because I love creating solutions and thinking how to solve them, in programming there is always something to do and there is always something to learn, like a programming language or new technologies</p>
        </div>
      </div>
    </div>
  )
}
