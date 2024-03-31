import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'

import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Orders } from './pages/app/orders/orders'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { NotFound } from './pages/404'

//a funcao recebe um array com um objeto pra cada rota 
export const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Dashboard />, },
        { path: '/orders', element: <Orders />, },
      ],
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        { path: '/sign-in', element: <SignIn />, },
        { path: '/sign-up', element: <SignUp />, },
      ],
    },
  ])