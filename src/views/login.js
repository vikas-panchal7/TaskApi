import * as React from 'react';
import {useState} from "react";
import {loginAction} from "../redux/actions/authActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Alert, Snackbar} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const defaultTheme = createTheme();

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emailinvalid, setEmailinvalid] = useState(false);
    const [passwordinvalid, setPasswordinvalid] = useState(false);
    const [err, setErr] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        !regex.test(email) ? setEmailinvalid(true) : setEmailinvalid(false);
        password === "" ? setPasswordinvalid(true) : setPasswordinvalid(false);
        if (regex.test(email) && password != "") {
            if (email === 'admin@gmail.com' && password === 'Abcd@1234') {
                dispatch(loginAction());
                const user = {email: "admin@gmail.com"};
                localStorage.setItem('user', JSON.stringify(user))
                navigate('/home');
            } else {
                setErr('Invalid email or password');
            }
        }
    }
    return (

        <ThemeProvider theme={defaultTheme}>
            <Snackbar open={err !== ""} anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      autoHideDuration={6000} onClose={() => setErr("")}>
                <Alert onClose={() => setErr("")} severity="error" sx={{width: '100%'}}>
                    {err}
                </Alert>
            </Snackbar>
            <Grid sx={{
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}>
                <Container component="main" maxWidth="xs" sx={{boxShadow: 10, backdropFilter: "blur(2px)"}}>
                    <CssBaseline/>

                    <Box
                        sx={{
                            paddingTop: 15,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100vh',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={emailinvalid}
                                helperText={emailinvalid && "Please Enter Valid Email !!"}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={passwordinvalid}
                                helperText={passwordinvalid && "Please Enter Valid Password !!"}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Log In
                            </Button>
                        </Box>

                    </Box>
                </Container>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;