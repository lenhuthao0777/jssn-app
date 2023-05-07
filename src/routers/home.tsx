import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const Home = lazy(() => import('@pages/Home'))

const HomeRoute = {
  id: uuid(),
  path: '/',
  loader: () => {},
  children: [
    {
      id: uuid(),
      path: '',
      element: <Home />,
      loader: () => {},
      index: true,
    },
  ],
}

export default HomeRoute
