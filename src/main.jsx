import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from "./Routes/cart.jsx";
import Main from "./Components/Main/Pagerender.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     {
         path: "/",
         element: <Main />,
      },
      {
         path: "/cart",
         element: <Cart />,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
