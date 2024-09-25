import React from 'react'
import Name from '../components/name'
import TopBar from '../components/topBar'
import SobreMi from '../components/sobreMi'
import Skils from '../components/skils'
import Proyectos from '../components/proyectos'
import Formulario from '../components/formulario'
import Formacion from '../components/formacion'
import Devathon from '../components/devathon'

export default function Home() {
  
  return (
    <div>
    <TopBar></TopBar>
 
<Name></Name>

<SobreMi/>
<Devathon/>
<Skils/>
<Proyectos/>
<Formacion/>
<Formulario/>
    </div>
  )
}
