import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

export default function Devathon() {
  const { contextTheme } = useThemeContext()
  return (
    <div className='devathon' id='devathon' >

      <div className='subdevathon'>
        <div>
          <h1 style={{ textAlign: 'center' }}>Devathon<i class="nes-jp-logo"></i></h1>
          <div className={contextTheme ? 'nes-container is-rounded is-dark' : 'nes-container is-rounded'} >
            <p>Then I continued learning until I developed a website as a team in an event called Devathon, participating in the first, second and fifth edition.These projects were: </p>
            <div className="lists is-dark">
              <ul className="nes-list is-circle eventos">
                <li><span className="nes-text is-primary">Programming in Spanish: </span>Website only for developers and the world of technology</li><br />
                <li><span className="nes-text is-success">Pirate TRIP: </span> Navigation app using the google maps api, using technologies such as React for the front-end and Laravel for the back-end</li><br />
                <li><span className="nes-text is-error">Abled:</span> A website called abled, a platform for accessible hotels for people with reduced mobility.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
