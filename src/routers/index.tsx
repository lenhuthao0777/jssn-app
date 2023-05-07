import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// ENUM
import { ROUTER_ENUM } from './Router.enum'
import AdminRoute from './admin'
import ClientRoute from './client'

// Components
const Login = lazy(() => import('@pages/Login'))
const PageNotFound = lazy(() => import('@pages/PageNotFound'))

type router = {
  path: string
  element: () => JSX.Element
  loader: () => void
  errorElement: () => JSX.Element
  children: children[]
}

type children = {
  path: string
  element: () => JSX.Element
  loader: () => void
  errorElement: () => JSX.Element
}

const routers = [
  // Role Admin
  AdminRoute,
  // Client
  ClientRoute,
  // Auth
  {
    id: uuid(),
    path: '/',
    routes: [
      {
        id: uuid(),
        path: ROUTER_ENUM.LOGIN,
        loader: () => {},
        children: [
          {
            id: uuid(),
            path: ROUTER_ENUM.DEFAULT,
            element: <Login />,
            loader: () => {},
            index: false,
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.NOT_FOUND,
    element: <PageNotFound />,
  },
]

const ListRouters = routers.map((route) => (
  <Route key={route.id} path={route.path} element={route.element}>
    {route.routes
      ? route.routes.map((item) => (
          <Route key={item.id} path={item.path}>
            {item.children
              ? item.children.map((child) => (
                  <Route
                    key={child.id}
                    index={child.index}
                    path={child.path}
                    element={child.element}
                  />
                ))
              : null}
          </Route>
        ))
      : null}
  </Route>
))

const router = createBrowserRouter(createRoutesFromElements(ListRouters))

export default router
