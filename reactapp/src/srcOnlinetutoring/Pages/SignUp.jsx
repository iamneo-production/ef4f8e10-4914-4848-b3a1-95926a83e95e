// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';
// import { addAdmin } from '../Component/Api';
// // import { useEffect } from 'react';



// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// // TODO remove, this demo shouldn't need to reset the theme.

// // hello

// // create

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const nav = useNavigate();
//   // const [firstname, setFirstname] = useState('');
//   // const [lastname, setLastname] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [dob, setDob] = useState('');
//   // const [gender, setGender] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [cPass, setCPass] = useState('');
//   // const [error, setError] = useState('');
//   // const [rm, setRm] = useState('');


//   // const handleRmChange = (event) => {
//   //   setRm(event.target.value);
//   // }
//   // const handleFirstnameChange = (event) => {
//   //   setFirstname(event.target.value);
//   // };
//   // const handleLastnameChange = (event) => {
//   //   setLastname(event.target.value);
//   // };

//   // const handleEmailChange = (event) => {
//   //   setEmail(event.target.value);
//   // };

//   // const handlePasswordChange = (event) => {
//   //   setPassword(event.target.value);
//   // };
//   // // const handleDobChange = (event) => {
//   // //   setDob(event.target.value);
//   // // };

//   // // const handleGenderChange = (event) => {
//   // //   setGender(event.target.value);
//   // // };


//   // const handleCpassChange = (event) => {
//   //   setCPass(event.target.value);
//   // };


//   // const handleSubmit = (event) => {
//   //   event.preventDefault();

//   //   if (!firstname || !lastname || !email || !password) {
//   //     alert('Please fill in all fields.');
//   //     return;
//   //   }

//   //   // if (password !== cPass) {
//   //   //     setError('Passwords do not match.');
//   //   //     return;
//   //   //   }

//   //   console.log('Firstname:', firstname);
//   //   console.log('Lastname:', lastname);
//   //   console.log('Email:', email);
//   //   // console.log('Date:', dob);
//   //   // console.log('Gender:', gender);
//   //   console.log("User Type: ", rm);
//   //   console.log('Password:', password);
//   //   // console.log('Confirm Password:', cPass);

//   //   console.log("Successfully Registered");
//   //   alert('Successfully Registered');
//   // };
//   // const handleSubmit = (event) => {
//   // event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get('email'),
//   //     password: data.get('password')
//   //   }
//   //   )
//   // };

//   // const [products, setProducts] = useState([]);

//   //fetch
//   const [formdata, setFormdata] = useState({
//     firstname:'',
//     lastname:'',
//     email:'',
//     password:''
//   })

//   // const fetchProducts = async () => {
//   //   try {
//   //     const response = await addAdmin();
//   //     setRm(response.data);
//   //     console.log(response.data);
//   //   }

//   //   catch (error) {
//   //     console.log(error);
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchProducts();
//   // },[])

//   //on submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {

//       await addAdmin(formdata);
//       nav('/')
//     }
//     catch (error) {
//         console.log(error);
//     }
//     console.log(formdata);

//   }

//   //assign
//   const handleChange = (e) => {
//     e.preventDefault();
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//     // console.log(formdata);
//   }
//   // const handleFirstnameChange = (e) => {
//   //   e.preventDefault();
//   //   setRm({ ...firstname, [e.target.id]: e.target.value })
//   // }
//   // const handleLastnameChange = (e) => {
//   //   e.preventDefault();
//   //   setRm({ ...lastname, [e.target.id]: e.target.value })
//   // }
//   // const handleEmailChange = (e) => {
//   //   e.preventDefault();
//   //   setRm({ ...email, [e.target.id]: e.target.value })
//   // }
//   // const handlePasswordChange = (e) => {
//   //   e.preventDefault();
//   //   setRm({ ...email, [e.target.id]: e.target.value })
//   // }


//   return (
//     <div className='out'>
//       <div id='sign'>
//         <div>
//           <ThemeProvider theme={defaultTheme}>
//             <Container component="main" maxWidth="xs">
//               <CssBaseline />
//               <Box
//                 sx={{
//                   marginTop: 5,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                   <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                   Sign up
//                 </Typography>
//                 <Box component="form" noValidate sx={{ mt: 3 }}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         autoComplete="given-name"
//                         name="firstName"
//                         required
//                         fullWidth
//                         id="firstname"
//                         label="First Name"
//                         autoFocus
//                         onChange={handleChange}

//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         required
//                         fullWidth
//                         id="lastname"
//                         label="Last Name"
//                         name="lastName"
//                         autoComplete="family-name"
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         required
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         autoComplete="email"
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         required
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="new-password"
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <FormControlLabel
//                         control={<Checkbox value="allowExtraEmails" color="primary" />}
//                         label="I want to receive inspiration, marketing promotions and updates via email."
//                       />
//                     </Grid>
//                   </Grid>
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                     // onClick={routeAdd}
//                     onClick={handleSubmit}
//                   >
//                     Sign Up
//                   </Button>
//                   <Grid container justifyContent="center">
//                     <Grid item>
//                       <Link href="#" variant="body2" onClick={() => nav('/')}>
//                         Already have an account? Sign in
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Box>
//               {/* <Copyright sx={{ mt: 5 }} /> */}
//             </Container>
//           </ThemeProvider>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import '../css/signup.css';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../Component/Api';
const Signup = () => {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastName] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [formdata,setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  )

  const nav= useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addStudent(formdata);
      nav('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  // const eventNavigate = () => {
  //   Navigate("/");
  // };

  // const handleFirstname = (event) => {
  //   setFirstname(event.target.value);
  // };

  // const handleLastname = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handlePhonenumber = (event) => {
  //   setPhonenumber(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   // Add any other validation checks here before submitting the form

  //   // Simulate form submission
  //   console.log('Successfully registered');
  //   console.log('FirstName: ', firstname);
  //   console.log('LastName:', lastname);
  //   console.log('PhoneNumber:', phonenumber);
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  //   console.log('Confirm Password:', confirmPassword);

  //   Navigate('/');

  // };

  return (
    <div className="down">
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            id='firstname'
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            id='lastname'
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id='password'
            onChange={handleChange}
            required
          />
          <button type="submit" onChange={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;