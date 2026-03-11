import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './../layout/RootLayout';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import VideoTutorial from '../pages/VideoTutorial';
import VideoPlayPage from '../pages/VideoPlayPage';
import Recarger from '../pages/Recarger';
import RecargerDetail from '../pages/RecargerDetail';

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
              {
                path: "/videotutoria",
                element: <VideoTutorial />
              },
              {
                path: "/playvideo",
                element: <VideoPlayPage />
              },
              {
                path: "/recargar",
                element: <Recarger />
              },
              {
                path: "/recarger-detail",
                element: <RecargerDetail />
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