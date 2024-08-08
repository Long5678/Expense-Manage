// import React from 'react'
import ReactDOM from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Main from './components/pages/main.jsx';
import Auth from './components/pages/auth.jsx';
import Login from './components/pages/login_regsiter/login.jsx';
import Regsiter from './components/pages/login_regsiter/regsiter.jsx';

import Main_nganSach from './components/pages/ngan_sach/main_nganSach.jsx';
import Main_loai_chiTieu from './components/pages/loai_chi_tieu/main_loai_chiTieu.jsx';
import Main_khoan_chiTieu from './components/pages/khoan_chi_tieu/main_khoan_chiTieu.jsx';
import Main_thong_ke from './components/pages/thong_ke/main_thong_ke.jsx';
import Main_admin from './components/pages/admin/main_admin.jsx';
import List_user from './components/pages/admin/list_user.jsx';

import { MainProvider } from './context/main_context.jsx';
import { store } from "./redux/store.js"
import { Provider } from 'react-redux';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Main_nganSach />
      },
      {
        path: "/loaichitieu",
        element: <Main_loai_chiTieu />
      },
      {
        path: "/khoanchitieu",
        element: <Main_khoan_chiTieu />
      },
      {
        path: "/baocao",
        element: <Main_thong_ke />
      }
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Regsiter />
      },
    ]
  },
  {
    path: "/admin",
    element: <Main_admin />,
    children: [
      {
        path: "/admin/user",
        element: <List_user />
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MainProvider>
      <RouterProvider router={routers} />
    </MainProvider>
  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
