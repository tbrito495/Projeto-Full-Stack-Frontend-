import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { axiosConfig } from '../Services/axiosConfig'
import axios from "axios"
import { useProtect } from '../ProtectedRoute/useProtect'

const MusicPage = (props) => {
    const [music, setMusic] = useState([])
    const AllMusics = () => {
        axios.get("http://localhost:3003/music/:id", axiosConfig)
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
      }, [])

    useProtect()
    
    return (
        <div>
            <p>music id</p>
            {music.map((musics)=>{
                return(
                    <div>
                        <div>
                            {musics.title}
                        </div>
                       <audio useRef="audio_tag" src={musics.file} controls autoPlay>   
                       </audio>
                       <div>
                        {musics.genre}
                       </div>
                       <div>
                        {musics.album}
                       </div>
                    </div>
                )
            })}
    
        </div>
    )

}
export default MusicPage;
