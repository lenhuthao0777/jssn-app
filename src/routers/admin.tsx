import { v4 as uuid } from 'uuid'
import { lazy } from 'react'

import HomeRoute from './home'
import ProfileRoute from './profile'

const Admin = lazy(() => import('@layouts/Admin'))

const AdminRoute = {
  id: uuid(),
  path: '/',
  element: <Admin />,
  routes: [HomeRoute, ProfileRoute],
}

export default AdminRoute
