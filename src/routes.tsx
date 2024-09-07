import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './Pages/home'
import { Post } from './Pages/post'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/post', element: <Post /> },
    ],
  },
])
