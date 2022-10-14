import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <div>Made by Jeffrey with love</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
