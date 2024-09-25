import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeContext } from '../context/ThemeContext';
export default function Formulario() {
  const {contextTheme}=useThemeContext()
    
  const refForm = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceId = 'service_q1cqxo2'
    const template = 'template_ne9hlch'

    const apikey = 'DSzH447UkK2LBI8Zs'
    emailjs.sendForm(serviceId, template,refForm.current, apikey)
      .then(result => toast.success('thanks for contacting me :)', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        }))
      .catch(err => toast.error('There was an error in the form, please try again later', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        }))


  }


  return (
    <div id='contact' className='principalForm '>
      <h1  style={{ textAlign: 'center' }}>contact form <i className="nes-logo"></i></h1>
<div className='containForm '>
      <form ref={refForm} action='' onSubmit={handleSubmit} className={contextTheme?'nes-container is-rounded is-dark':'nes-container is-rounded'} >
      <label  >Name</label>
        <fieldset style={contextTheme?{backgroundColor: '#212529',  padding: '1rem' }:{backgroundColor: '#fff',  padding: '1rem' }}  className="nes-field is-inline">

          
          <input name='username' required type="text" className={contextTheme?'nes-input is-dark ':'nes-input '} placeholder="Enter your Name" />
        </fieldset>
        
        <label  >Email</label>
        <fieldset style={contextTheme?{backgroundColor: '#212529',  padding: '1rem' }:{backgroundColor: '#fff',  padding: '1rem' }} className="nes-field is-inline">

          
          <input name='useremail' required type="email"  className={contextTheme?'nes-input is-dark ':'nes-input '} placeholder="Enter your Email" />
        </fieldset>
        <label >Textarea</label>
        <fieldset style={contextTheme?{backgroundColor: '#212529',  padding: '1rem' }:{backgroundColor: '#fff',  padding: '1rem' }}  className="nes-field is-inline">

      
        <textarea placeholder="Enter your message" name='message' style={{resize:'none',height:'200px'}} id="textarea_field" className={contextTheme?'nes-input is-dark ':'nes-input '}></textarea>
</fieldset>
        <button className='nes-btn is-success' style={{textAlign:'center'}}>Send Contact</button>
      </form>
      <ToastContainer/>
    </div>
    </div>
  )
}
