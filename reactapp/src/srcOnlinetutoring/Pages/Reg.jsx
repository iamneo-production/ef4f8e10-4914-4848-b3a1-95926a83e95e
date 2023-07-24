// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
// //   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import { useState } from 'react';
// import "../css/register.css";
// import { addStudent } from '../Component/Api';
// import { useNavigate } from 'react-router-dom';
// function Register() {

//     const nav= useNavigate();
//     const [formdata,setFormdata] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         password: ''
//       }
//       )


//       const handleChange = (e) => {
//         e.preventDefault();
//         setFormdata({ ...formdata, [e.target.id]: e.target.value })
//         console.log(formdata);
//       }
//       const handleSubmit = async(e) => {
//         e.preventDefault();
//         try{
//           await addStudent(formdata);
//           nav('/')
//         }
//         catch(error){
//           console.log(error);
//         }

//         console.log(formdata);
//       }
//   return (
//     <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{height:'760px',backdropFilter: "blur(4px)", backgroundColor: 'rgba(233, 233, 260, 0.3)',backgroundImage: 'url(https://res.cloudinary.com/djpss9cg9/image/upload/f_auto,q_auto/v1/Sethu/bcutrr5gazloeprtqkn4)'}}>
//       <div className='mask gradient-custom-3'></div>
//       <form onClick={handleSubmit}>
//       <MDBCard className='m-5' style={{maxWidth: '600px'}}>
//         <MDBCardBody className='px-5'>
//           <h2 className="text-uppercase text-center mb-5">Create an account</h2>
//           <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='firstname' type='text' onChange={handleChange}/>
//           <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='lastname' type='text' onChange={handleChange}/>
//           <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='email' type='email' onChange={handleChange}/>
//           <MDBInput wrapperClass='mb-4' label='password' size='lg' id='password' type='password' onChange={handleChange}/>
//           {/* <div className='d-flex flex-row justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
//           </div> */}
//           <input type='checkbox' required />
//           <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//       </form>
//     </MDBContainer>
//   );
// }

// export default Register;

import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import { addStudent } from '../Component/Api';
// import { useEffect } from 'react';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

// hello

// create

const defaultTheme = createTheme();

export default function SignUp() {
    const nav = useNavigate();
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [email, setEmail] = useState('');
    // const [dob, setDob] = useState('');
    // const [gender, setGender] = useState('');
    // const [password, setPassword] = useState('');
    // const [cPass, setCPass] = useState('');
    // const [error, setError] = useState('');
    // const [rm, setRm] = useState('');


    // const handleRmChange = (event) => {
    //   setRm(event.target.value);
    // }
    // const handleFirstnameChange = (event) => {
    //   setFirstname(event.target.value);
    // };
    // const handleLastnameChange = (event) => {
    //   setLastname(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //   setEmail(event.target.value);
    // };

    // const handlePasswordChange = (event) => {
    //   setPassword(event.target.value);
    // };
    // // const handleDobChange = (event) => {
    // //   setDob(event.target.value);
    // // };

    // // const handleGenderChange = (event) => {
    // //   setGender(event.target.value);
    // // };


    // const handleCpassChange = (event) => {
    //   setCPass(event.target.value);
    // };


    // const handleSubmit = (event) => {
    //   event.preventDefault();

    //   if (!firstname || !lastname || !email || !password) {
    //     alert('Please fill in all fields.');
    //     return;
    //   }

    //   // if (password !== cPass) {
    //   //     setError('Passwords do not match.');
    //   //     return;
    //   //   }

    //   console.log('Firstname:', firstname);
    //   console.log('Lastname:', lastname);
    //   console.log('Email:', email);
    //   // console.log('Date:', dob);
    //   // console.log('Gender:', gender);
    //   console.log("User Type: ", rm);
    //   console.log('Password:', password);
    //   // console.log('Confirm Password:', cPass);

    //   console.log("Successfully Registered");
    //   alert('Successfully Registered');
    // };
    // const handleSubmit = (event) => {
    // event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password')
    //   }
    //   )
    // };

    // const [products, setProducts] = useState([]);

    //fetch
    const [formdata, setFormdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    // const fetchProducts = async () => {
    //   try {
    //     const response = await addAdmin();
    //     setRm(response.data);
    //     console.log(response.data);
    //   }

    //   catch (error) {
    //     console.log(error);
    //   }
    // }

    // useEffect(() => {
    //   fetchProducts();
    // },[])

    //on submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await addStudent(formdata);
            nav('/')
        }
        catch (error) {
            console.log(error);
        }
        console.log(formdata);

    }

    //assign
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
        console.log(formdata);
    }
    // const handleFirstnameChange = (e) => {
    //   e.preventDefault();
    //   setRm({ ...firstname, [e.target.id]: e.target.value })
    // }
    // const handleLastnameChange = (e) => {
    //   e.preventDefault();
    //   setRm({ ...lastname, [e.target.id]: e.target.value })
    // }
    // const handleEmailChange = (e) => {
    //   e.preventDefault();
    //   setRm({ ...email, [e.target.id]: e.target.value })
    // }
    // const handlePasswordChange = (e) => {
    //   e.preventDefault();
    //   setRm({ ...email, [e.target.id]: e.target.value })
    // }


    return (
        <div className='out'>
            <div id='sign'>
                <div>

                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                {/* <form onSubmit={handleSubmit}> */}
                                    <Box component="form" noValidate sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="firstName"
                                                    required
                                                    fullWidth
                                                    id="firstname"
                                                    label="First Name"
                                                    autoFocus
                                                    onChange={handleChange}

                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="lastname"
                                                    label="Last Name"
                                                    name="lastName"
                                                    autoComplete="family-name"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="new-password"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            // onClick={routeAdd}
                                            onClick={handleSubmit}
                                        >
                                            Sign Up
                                        </Button>
                                        <Grid container justifyContent="center">
                                            <Grid item>
                                                <Link href="#" variant="body2" onClick={() => nav('/')}>
                                                    Already have an account? Sign in
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                {/* </form> */}
                            </Box>
                            {/* <Copyright sx={{ mt: 5 }} /> */}
                        </Container>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
}
