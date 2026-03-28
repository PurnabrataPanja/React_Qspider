import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './CRUD/Home'
import Update from './CRUD/Update'
import View from './CRUD/View'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/view',
    element:<View/>
  },
  {
    path:'/update/:id',
    element:<Update/>
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App