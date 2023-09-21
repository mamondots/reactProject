import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import TeamDetails from "../Pages/TeamDetails/TeamDetails";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/projectdetails',
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: '/teamdetails',
        element: <TeamDetails></TeamDetails>
      },
      {
        path: '/blogdetails',
        element: <BlogDetails></BlogDetails>
      }
    ]
  },
]);