import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './../layout/RootLayout';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                { 
                index: true, 
                element: <Home /> 
            },
            {
                path: "/perfil",
                element: <Perfil />
              },
            
            ]
        },
        {
            path:"*",
            element:<Error></Error>
        }

]
)

export default router;