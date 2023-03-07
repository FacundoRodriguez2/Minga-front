import React from 'react'
import './registerform.css'
import googleLogo from '../../images/Google.svg'
import RegisterFieldset from '../registerfieldset/registerfieldset'
import profile from '../../images/profile.svg'
import email from '../../images/@.svg'
import lock from '../../images/lock1.svg'
import Input from '../input/input'
import Camera from '../../images/camera.svg'
import { useRef } from 'react'
import axios from 'axios'
import { Link as Anchor } from 'react-router-dom'

export default function RegisterForm() {
    let dataForm = useRef()
    let form = document.getElementById('form')

    async function handleSubmit(e){
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current).forEach(e => {
            if(e.name){
                formInputs.push(e)
            }
        })
        formInputs.pop()
        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            [formInputs[2].name]: formInputs[2].value,
            [formInputs[3].name]: formInputs[3].value
        }

        let url = 'http://localhost:8080/api/auth/signup'
       
            try{
                await axios.post(url,data)
                
                alert("Registro exitoso")
                dataForm.current.reset()
              }catch(error){
                console.log(error)
                console.log("ocurrio un error")
            }
    }

    return (
        <form className='form' id='form' onSubmit={handleSubmit} ref={dataForm}>
            <RegisterFieldset legendText='Name' inputType='text' inputName='name' inputId='name' imgSrc={profile} imgAlt='person' />
            <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
            <RegisterFieldset legendText='Photo' inputType='photo' inputName='photo' inputId='photo' imgSrc={Camera} imgAlt='camera' />
            <RegisterFieldset legendText='Password' inputType='Password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />
            
            <fieldset className='notification-check'>
                <input type="checkbox" name='email-notification' id='email-notification' />
                <label htmlFor='email-notification'>Send notification to my email</label>
            </fieldset>
            <Input className='sign-up' type='submit' value="Sign up" />
            <a href='#' className='sign-in-google'> <img src={googleLogo} alt="googleLogo" /><span>Sign in with Google</span></a>
            <p>Already have an account? <Anchor to='signin' className='link'>Log in</Anchor></p>
            <p>Go back to <Anchor to='/' className='link'>home page</Anchor></p> 
        </form>
    )
}