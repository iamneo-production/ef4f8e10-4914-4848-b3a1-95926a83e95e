// import React, { useState } from 'react';
import '../css/feed.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { setfeed } from '../Component/Api';
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
// import axios from 'axios';

const FeedForm = () => {
    //   const [email, setEmail] = useState('');
    //   const [Name, setName] = useState('');
    //   const[Subject,setSubject]=useState('');
    //   const[Message,setMessage]=useState('');
    const [formdata, setFormdata] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''

    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
        console.log(formdata);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/Feedback/setfeed`,formdata);
        }
        catch (error) {
            console.log(error);
        }

        alert("Success Feedback Posted"); 
        console.log(formdata);
        navigate('/');
    }


    const defaultTheme = createTheme();
    //   const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    //   };

    //   const handleNameChange = (event) => {
    //     setName(event.target.value);
    //   };
    //   const handleSubjectChange = (event)=>{
    //     setSubject(event.target.value);
    //   }
    //   const handleMessageChange = (event)=>{
    //     setMessage(event.target.value);
    //   }

    //   const handleSubmit = (event) => {
    //     // event.preventDefault();
    //     // if (!email || !password) {
    //     //   alert("please enter Email and password.");
    //     //   return;
    //     // }
    //     // Add your login logic here
    //     console.log('Login form submitted');
    //     console.log('Email:', email);
    //     console.log('Name:', Name);
    //     console.log('Subject',Subject);
    //     console.log('Message',Message);
    //   //  Navigate('/Home')
    //   };

    return (
        // <div className="down">
        //     <div className="login-form">
        //         <h2>FEEDBACK</h2>
        //         <form onSubmit={handleSubmit} >
        //             <input
        //                 type="email"
        //                 placeholder="Email"
        //                 id='email'
        //                 onChange={handleChange}
        //                 required
        //             />
        //             <input
        //                 type="name"
        //                 placeholder="Name"
        //                 id='name'
        //                 onChange={handleChange}
        //                 required
        //             />
        //             <input
        //                 type="name"
        //                 placeholder="Subject"
        //                 id='subject'
        //                 onChange={handleChange}
        //                 required
        //             />
        //             <input
        //                 type="name"
        //                 placeholder="Message"
        //                 id='message'
        //                 onChange={handleChange}
        //                 required
        //             />
        //             <button type='submit' onChange={handleSubmit}>Submit</button>
        //             <div className="button">

        //             </div>
        //         </form>
        //     </div>
        // </div>
        //doooooo

        <div>
            <div id="con">
                <div className="logbox" >
                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 7,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" color='white'>
                                    FeedBack
                                </Typography>
                                <Box component="form"  noValidate>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={handleChange}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="name"                                      
                                        label="Name"
                                        type="text"
                                        id="name"
                                        onChange={handleChange}
                                        autoComplete=""
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="subject"
                                        label="Subject"
                                        type="text"
                                        id="subject"
                                        onChange={handleChange}
                                        autoComplete="subject"
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="massage"
                                        label="message"
                                        type="text"
                                        id="message"
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                    />
                                    {/* <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    /> */}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 5, mb: 2 }}
                                        onClick={handleSubmit}
                                        // onClick={() => navigate('/Home')}
                                    >
                                        Register
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
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2" onClick={() => navigate('/')}>
                                            <center color="" style={{transform:"translateY('20px')"}}>
                                                {"Login?"}
                                            </center>
                                        </Link>
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
};

export default FeedForm;