import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/Routes'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Dashboard from './Pages/Dashboard.jsx'
// import Login from './Login.jsx'
// import Signin from './SignIn.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Dashboard/> */}
  </React.StrictMode>
)