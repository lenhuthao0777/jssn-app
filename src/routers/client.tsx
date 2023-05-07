import Client from '@layouts/Client'
import { v4 as uuid } from 'uuid'

import News from '@pages/News'
import NewsRoute from './news'

const ClientRoute = {
  id: uuid(),
  path: '/',
  element: <Client />,
  routes: [NewsRoute],
}

export default ClientRoute
