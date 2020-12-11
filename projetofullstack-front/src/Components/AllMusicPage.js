import React, { useState, useEffect } from 'react'

import { axiosConfig } from '../Services/axiosConfig'
import axios from "axios"
import { useProtect } from '../ProtectedRoute/useProtect'

const AllMusicPage = (props) => {
    const [music, setMusic] = useState([])
    const Musics = () => {
        axios.get("http://localhost:3003/music/all", axiosConfig)
        .then(response =>{
            console.log(response.data)
            setMusic(response.data)
        })
        .catch(error=>{
            console.log(error)
            console.log(axiosConfig)
        })
    }
    useEffect(() => {
        Musics()
      }, [])

    useProtect()
    
    return (
        <div>
            {music.map((musics)=>{
                return(
                    <div>
                        <div>
                            {musics.title}
                                </div>
            
                    </div>
                )
            })}
    
        </div>
    )

}
export default AllMusicPage;
