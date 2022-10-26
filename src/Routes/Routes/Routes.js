import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home"
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course/Course";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                // loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]

    }

])