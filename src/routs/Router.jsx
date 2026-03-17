import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './../layout/RootLayout';
import DashboardLayout from './../layout/DashboardLayout';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import VideoTutorial from '../pages/VideoTutorial';
import VideoPlayPage from '../pages/VideoPlayPage';
import Recarger from '../pages/Recarger';
import RecargerDetail from '../pages/RecargerDetail';
import Vip from '../pages/VIP';
import Profit from '../pages/Profit';
import User from '../pages/User';
import Invite from '../pages/Invite';
import Withdrawal from '../pages/Withdrawal';
import FinancialRecord from '../pages/FinancialRecord';
import DailyStatement from '../pages/DailyStatement';
import EmployeeHandbook from '../pages/EmployeeHandbook';
import DownloadApp from '../pages/DownloadApp';
import Lucky from '../pages/Lucky';
import FondoRiqueza from '../pages/FondoRiqueza';
import PointStore from '../pages/PointStore';
import MysteryBox from '../pages/MysteryBox';

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
              {
                path: "/vip",
                element: <Vip />
              },
              {
                path: "/profit",
                element: <Profit />
              },
              {
                path: "/user",
                element: <User />
              },
              {
                path: "/invite",
                element: <Invite />
              },
              {
                path: "/withdraw",
                element: <Withdrawal />
              },
              {
                path: "/fundRecord",
                element: <FinancialRecord />
              },
              {
                path: "/dailyStatement",
                element: <DailyStatement />
              },
              {
                path: "/employHandbook",
                element: <EmployeeHandbook />
              },
              {
                path: "/downloadApp",
                element: <DownloadApp />
              },
              {
                path: "/lucky",
                element: <Lucky />
              },
              {
                path: "/fondo",
                element: <FondoRiqueza />
              },
              {
                path: "/pointStore",
                element: <PointStore />
              },
              {
                path: "/mysteryBox",
                element: <MysteryBox />
              },
            
            ]
        },
        {
          path: "/dashboard",
          element: <DashboardLayout></DashboardLayout>,
          children: [
              
          
          
          ]
      },
        {
            path:"*",
            element:<Error></Error>
        }

]
)

export default router;