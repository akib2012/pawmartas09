import { createBrowserRouter } from 'react-router'
import Navbar from '../Components/Navbar';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Petcaredetils from '../Pages/Petcaredetils';
import Regester from '../Pages/Regester';
import Login from '../Pages/Login';
import Privaterouter from './Privaterouter'
import Loading from '../Components/Loading';
import MyProfile from '../Pages/MyProfile';
import UpdateProfile from '../Components/UpdateProfile';
import Forgetpass from '../Pages/Forgetpass';
import PagenotFound from '../Components/PagenotFound';
import Service from '../Pages/Service';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <PagenotFound></PagenotFound>,
    
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: () => fetch('/petdata.json'),
        },
        {
          path: '/petdetails/:id',
          element: <Privaterouter><Petcaredetils></Petcaredetils></Privaterouter>  ,
          loader: () => fetch('/petdata.json'),

        },
        {
          path: '/regester',
          element: <Regester></Regester>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/profile',
          element: <Privaterouter><MyProfile></MyProfile></Privaterouter>,
        },
        {
          path: '/updateprofile',
          element: <Privaterouter><UpdateProfile></UpdateProfile></Privaterouter>,
        },
        {
          path: '/resetpassword',
          element: <Forgetpass></Forgetpass>,
        },
        {
          path: '/service',
          element: <Service></Service>,
          loader: () => fetch('/petdata.json'),
          
        }
      
    ]

  }
])


export default router;