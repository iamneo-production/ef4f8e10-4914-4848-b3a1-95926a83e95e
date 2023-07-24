import { Routes, Route } from 'react-router-dom'
// import  ReactDOM from 'react-dom';
// import Navbar from '../Components/Navbar';
import Login from '../Pages/Login.jsx'
// import Signin from '../Pages/SignIn.jsx';
import Live from '../Pages/Liveclass.jsx';
import Album from '../Pages/Courses.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Home from '../Pages/HomePage.jsx';
import Profile from '../Pages/Profile.jsx';
import Enroll from '../Pages/Enroll.jsx';
// import PaymentForm from '../Pages/Payment.jsx'
import Checkout from '../Pages/Checkout.jsx';
import Certify from '../Pages/Certification.jsx';
import Blogs from '../Pages/AboutUs.jsx'
import Dashboard from '../Pages/Dashboard.jsx';
// import Log from '../Pages/LogcumReg'
// import Register from '../Pages/Reg.jsx';
// import Signup from '../Pages/SignUp.jsx';
import SignUp from '../Pages/Reg.jsx';
// import FeedForm from '../Pages/Feedback.jsx';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                {/* <Route path='/signIn' element={<Signin />} /> */}
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Home' element={<Dashboard />} />
                <Route path='/Liveclass' element={<Live />} />
                <Route path='/MyCourse' element={<Album />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Course' element={<Enroll />} />
                {/* <Route path='/Payment' element={<PaymentForm />} /> */}
                <Route path='/Checkout' element={<Checkout />} />
                <Route path='/certi' element={<Certify/>} />
                <Route path='/about' element={<Blogs/>} />
                {/* <Route path='/feed' element={<FeedForm/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}
export default App;