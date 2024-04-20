import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from "./Components/Cart";
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'cart',
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
