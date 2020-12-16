import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from "axios";
import useForm from '../../CustomHooks/useForm';
import { useUnProtect } from '../../ProtectedRoute/useUnProtect';



const LoginPage = (props) =>{
    const {form, onChange, resetState} = useForm ({email:"", password:""})
    const handleOnchange = (event) =>{
        const {name, value} = event.target
        onChange (name,value)
    }

    const Login = () =>{

        const body = {
            email:form.email,
            password: form.password
        }

        axios.post("http://localhost:3003/user/login", body)
        
        .then(response => {
            console.log("user logged in")
            localStorage.setItem("token", response.data.token);

        })
        .catch(error =>{
            console.log(error)
        })
    }

        const HandleSubmission = (event) =>{
            event.preventDefault()
            Login()
            resetState()
        }
        useUnProtect()

    return(
        <div>
             <Container component="main" maxWidth="xs">

      <div >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <form method= "post" onSubmit={HandleSubmission}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            value={form.email}
            onChange={handleOnchange}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            value={form.password}
            onChange={handleOnchange}
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"No account? Sign-up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    
    </Container>
        </div>
    )
}
export default LoginPage;