import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import useForm from '../CustomHooks/useForm';
import { axiosConfig } from '../Services/axiosConfig';
import { useProtect } from '../ProtectedRoute/useProtect';




const CreateMusicPage = (props) => {
    const { form, onChange, resetState } = useForm({ author_name:"", title: "", file: "", genre: "", album: "" })
    const handleOnchange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }
    const Music = () => {
        const body = {
            author: form.author,
            title: form.title,
            file: form.file,
            genre: form.genre,
            album: form.album,
            author_name:form.author_name
        }
        axios.post("http://localhost:3003/music/register", body, axiosConfig)
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                console.log(error)
            })

    }
    const HandleSubmission = (event) => {
        event.preventDefault()
        Music()
        resetState()
    }
    useProtect()

    return (
        <div>
            <form method="post" onSubmit={HandleSubmission}>

            <input
                    id="author"
                    label="Author"
                    value={form.author_name}
                    onChange={handleOnchange}
                    name="author_name"
                    placeholder="author"
                    autoFocus
                />

                <input
                    id="title"
                    label="Music Title"
                    value={form.title}
                    onChange={handleOnchange}
                    name="title"
                    placeholder="title"
                    autoFocus
                />

                <input
                    id="file"
                    label="Music file"
                    value={form.file}
                    onChange={handleOnchange}
                    name="file"
                    placeholder="file"
                    autoFocus
                />

                <input
                    id="genre"
                    label="Genre"
                    value={form.genre}
                    onChange={handleOnchange}
                    name="genre"
                    placeholder="genre"
                    autoFocus
                />

                <input
                    id="album"
                    label="Album"
                    value={form.album}
                    onChange={handleOnchange}
                    name="album"
                    placeholder="album"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Criar musica
                </Button>
            </form>
        </div>
    )

}
export default CreateMusicPage;


