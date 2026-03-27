import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import Help from './Router/Help'
import Nav from './Router/Nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/help',
        element: <Help />
      }
    ]
  }
])

const App = ()=> {
  return <RouterProvider router={router} />
}

export default App