import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { axiosConfig } from '../Services/axiosConfig'
import axios from "axios"
import { useProtect } from '../ProtectedRoute/useProtect'

const MusicPage = (props) => {
    const [music, setMusic] = useState([])
    const pathParams = useParams()
    const AllMusics = () => {
        axios.get(`http://localhost:3003/music/${pathParams.id}`, axiosConfig)
        .then(response =>{
            console.log(response.data)
            setMusic(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(() => {
        AllMusics()
        console.log(music)
      }, [])

    useProtect()
    
    return (
        <div>
            <div>
            {music.title}
            </div>
            <div>
            <audio
            src=  {music.file} controls> 

            </audio>
          
            </div>
            <div>
            {music.genre}
            </div>
            <div>
            {music.album}
            </div>
            <div>
            {music.author_name}
            </div>
    
        </div>
    )

}
export default MusicPage;
