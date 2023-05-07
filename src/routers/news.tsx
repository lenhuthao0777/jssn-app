import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const News = lazy(() => import('@pages/News'))

const NewsRoute = {
  id: uuid(),
  path: '/news',
  loader: () => {},
  children: [
    {
      id: uuid(),
      path: '',
      element: <News />,
      loader: () => {},
      index: true,
    },
  ],
}

export default NewsRoute
