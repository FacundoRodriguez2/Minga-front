import React from "react";
import './authorForm.css'
import Input from "../input/input";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import image from "../../images/image.png"
import apiUrl from "../../url"

export default function AuthorForm() {
    let dataForm = useRef()
    let {user_id} = useParams()
    console.log(user_id)
    async function handleSubmit(e){
        e.preventDefault()

        let formInputs = []
        Object.values(dataForm.current).forEach(e => {
            if(e.name){
                formInputs.push(e.value)
            }
        })
        let [city, country] = formInputs[2].split(',');
        let data = {
        name: formInputs[0],
        last_name: formInputs[1],
        city: city,
        country: country,
        date: formInputs[3],
        photo: formInputs[4],
        user_id
        }

        console.log(data)
        let url = `${apiUrl}authors`
        let token = localStorage.getItem('token')
        console.log(token)
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        try{
            await axios.post(url,data,headers)
            alert('Author created successfully')
            dataForm.current.reset()
          }catch(error){
            console.log(error)
            
            if (error.response.data === 'Unauthorized') {
                alert('You need to Login')
            }
            if(typeof error.response.data.message === 'string'){
                alert(error.response.data.message)
               }else{
                error.response.data.message.forEach(err => alert(err))
               }
          }
    }
        return(
        <div id="authorbox">
            <div id="authorcontent">
                <div id="newAuthor" >
                    <h2>New Author</h2>
                </div>

                <div>
                    <img src={image} alt="profile"/> 
                </div>

                <form id="authorform" ref={dataForm} onSubmit={handleSubmit}>
                    <Input className='authorinput' type='text' name='name' placeholder='Name'/>
                    <Input className='authorinput' type='text' name='last_name' placeholder='Last Name'/>
                    <Input className='authorinput' type='text' name='city, country' placeholder='City, Country'/>
                    <Input className='authorinput' type='date' name='date' placeholder='Date'/>
                    <Input className='authorinput' type='url' name='photo' placeholder='URL Profile Image'/>
                    <Input id='send' type='submit' value='Send'/>
                </form>
            </div>
        </div>
    )

}
