import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { ErrorPage } from '@/pages/Error'
import { Loader } from '@/components/Loader'
import { App } from '@/App'
import { ProductDetail } from './pages/ProductDetail'

import './index.css'
// route / to /products redirect

const router = createBrowserRouter([
  {
    path: '/products',
    element: <Home />,
    errorElement: <ErrorPage />,
    loaderElement: <Loader />,
    children: [
      {
        path: '/products',
        element: <App />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
], {
  basename: '/'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
