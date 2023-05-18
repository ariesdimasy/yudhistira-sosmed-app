import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Tweet from "./pages/tweet";
import TweetDetail from "./pages/tweet-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/tweets",
    element: <Tweet></Tweet>,
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
