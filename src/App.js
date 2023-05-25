import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";

import Layout from "./layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Tweet from "./pages/tweet";
import TweetDetail from "./pages/tweet-detail";
import Unauthorized from "./pages/unauthorized";
import Sample from "./pages/sample";
import Activation from "./pages/activation";
import ForgotPassword from "./pages/forgot-password";
import RequestActivation from "./pages/request-activation";
import RequestForgotPassword from "./pages/request-forgot-password";

const PrivateRoute = (props) => {
  const userLogin = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin")) : {}
  //const navigate = useNavigate()
  if(userLogin?.token) {
    return props.children
  } else { 
    //return navigate("/login")
    return <Navigate to={'/login'} />
    //window.location.href = 'http://localhost:3000/'
  }
}

const PublicRoute = ({children}) => {
  const userLogin = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin")) : {}
  //const navigate = useNavigate()
  if(userLogin?.token) { 
    return <Navigate to="/tweets"/>
  } else { 
    return children
    //window.location.href = 'http://localhost:3000/'
  }
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/tweets",
    element: (
      <PrivateRoute>
        <Tweet></Tweet>
      </PrivateRoute>
    ),
  },
  {
    path: "/tweets/:id",
    element: <TweetDetail></TweetDetail>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/profile/:username",
    element: <Profile></Profile>,
  },
  {
    path:"/activation",
    element:<Activation></Activation>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword></ForgotPassword>
  },
  {
    path:"/request/activation",
    element:<RequestActivation />
  },
  {
    path:"/request/forgot-password",
    element:<RequestForgotPassword />
  },
  {
    path:"/sample",
    element:<Sample></Sample>
  },
  {
    path: "/test",
    element: <Unauthorized />,
  },
]);

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router}></RouterProvider>
      </Layout>
    </div>
  );
}

export default App;
