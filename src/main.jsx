import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBook from './Components/ListedBook/ListedBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=> fetch('../../../public/data/booksData.json')
            },
            {
              path:'ListedBook',
              element:<ListedBook></ListedBook>
            },
      {
        path:'deshboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
