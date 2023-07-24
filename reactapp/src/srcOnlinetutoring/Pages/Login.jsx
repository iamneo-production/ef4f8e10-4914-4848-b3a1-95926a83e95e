// // import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// // import "/css/log.css"
import "/src/css/register.css"

// function Login(){
//     const navigate = useNavigate();
//     const[username, setUsername] = useState('');
//     const[password, setPassword] = useState('');

//     const saveUsername = (event) =>{
//         setUsername(event.target.value);
//     };

//     const savePassword = (event) =>{
//         setPassword(event.target.value);
//     };
//     const onSubmit = (event) =>{
//         event.preventDefault();
//         console.log(username);
//         console.log(password);
//     }

//     return(
//         <div className="down">
//             <div className="login-form">
//                 <form>
//                     <h1>Login</h1>
//                     <input id="box" type="username" value={username} onChange={saveUsername} placeholder="Username" required />
//                     <br></br>
//                     <input id="box" type="password" value={password} onChange={savePassword} placeholder="passcode" required/>
//                     <button type="submit" onClick={() => navigate("./Home")} onChange={onSubmit} >Login</button>
//                     <a href="./SignUp">Register?click here</a>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
// import { useState } from "react";
// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="./HomePage.jsx">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    // const [username,setUsername] = useState();
    // const [password,setPassword] = useState();

    // const handleUsername = (e) =>
    // {
    //     setUsername(e.target.value);
    // }
    // const handlePassword = (e) =>
    // {
    //     setPassword(e.target.value);
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     if (!username || !password) {
    //         alert('Please fill in all fields.');
    //         return;
    //     }else{
    //         alert("Login successful");
    //     }
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    //     navigate('/Home');
      
    // };

    return (
        <div>
            <div id="con">
                <div className="logbox">
                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" color='white'>
                                    Sign in
                                </Typography>
                                <Box component="form"  noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        // onChange={handleUsername}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        // onChange={handlePassword}
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        // onChange={handleSubmit}
                                        onClick={() => navigate('/Home')}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container sx={{ justifyContent: 'center' }}>
                                        {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                                        <Grid item>
                                            <Link href="#" variant="body2" onClick={() => navigate('/SignUp')}>
                                                {"Dont't have an account?SignUp"}
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="body2" onClick={() => navigate('/SignUp')}>
                                                {"FeedBack"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                        </Container>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
}