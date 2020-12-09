import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useForm from '../CustomHooks/useForm';
import axios from 'axios'



const SignupPage = (props) => {
  const [state, setState] = useState({ helperText: '', error: false })

  const { form, onChange, resetState } = useForm({ name: "", nickName: "", email: "", password: "" })

  const handleOnchange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
    if (event.target.value.length >= 6) {
      setState({ helperText: '', error: false });
    }
    else {
      setState({ helperText: 'must have more than 6 digits', error: true });
    }
  }

  const Signup = () => {

    const body = {
      name: form.name,
      nickname: form.nickName,
      password: form.password,
      email: form.email

    }
    axios.post("http://localhost:3003/user/signup", body)
      .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const HandleSubmission = (event) => {
    event.preventDefault()
    Signup()
    resetState()
  }


  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form method="post" onSubmit={HandleSubmission}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField

                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={handleOnchange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nickName"
                  label="Nickname"
                  value={form.nickName}
                  onChange={handleOnchange}
                  name="nickName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={form.email}
                  onChange={handleOnchange}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  helperText={state.helperText}
                  error={state.error}
                  value={form.password}
                  onChange={handleOnchange}
                  type="password"
                  id="password"
                  required

                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>

      </Container>
  );
    </div>
  )
}

export default SignupPage;