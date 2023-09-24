import React from 'react'
import '../assets/css/login.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useFormik} from 'formik';
import { LoginSchema } from '../schemas/LoginSchema';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const initialValue = {
  "username": "",
  "password": "",
}
const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { values, errors, handleSubmit,handleChange, touched } = useFormik({
    initialValues: initialValue,
    validationSchema: LoginSchema,
    onSubmit: (value,action) => {
      setAuth({ user: value});
      action.resetForm();
      navigate("/dashboard");
    }
  });

  return (
    <div className='login-container'>
      <div className="bg-login">
        <div className="card mx-auto">
          <div className="card-body box-card">
            <div className='box-items'>
              <div className="box-title">
              <Typography component="h1" className="text-center" variant="h5">
                <Avatar sx={{ m:1,bgcolor: 'secondary.main' }}>
                  <AccountCircleIcon />
                </Avatar> Sign in
              </Typography>
              </div>
              <Box component="form" noValidate sx={{ mt:1 }} onSubmit={handleSubmit}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  value={values.username}
                  onChange={handleChange}
                  label="Username"
                  id='username'
                  name='username'
                  autoComplete='off'
                  autoFocus
                />
                <p className='invalid-error'>{ touched.username && errors.username }</p>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  id='password'
                  name='password'
                  autoComplete='off'
                  autoFocus
                  type='password'
                />
                <p className='invalid-error'>{ touched.password && errors.password }</p>
                <Button fullWidth type='submit' sx={{ mt:2, mb:3 }} variant="contained" color="primary">Sign In</Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login