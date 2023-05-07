import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const Profile = lazy(() => import('@pages/Profile'))

const ProfileRoute = {
  id: uuid(),
  path: '/profile',
  loader: () => {},
  children: [
    {
      id: uuid(),
      path: '',
      element: <Profile />,
      loader: () => {},
      index: false,
    },
  ],
}

export default ProfileRoute
