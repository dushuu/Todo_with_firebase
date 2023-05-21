import React from 'react'
import { Navigate } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import AppLayout from '../layout/Applayout/AppLayout'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Todo from '../pages/Auth/TodoList/Todo'

const Approutes = () => {
    const elements = useRoutes([
        {
            children:[{
                element:<Login/>,
                path:'/'

            },{
                element:<Signup/>,
                path:'/signup'
            }
        ],
        
        element: <AppLayout/>
        },
        {
            element:<Todo/>,
            path:'/todo'
        }
    ])
  return elements
}


export default Approutes