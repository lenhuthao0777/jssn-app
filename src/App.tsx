import { Fragment, Suspense } from 'react'
import router from './routers'
import { RouterProvider } from 'react-router-dom'
import Toast from '@components/Toast'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading......</div>}>
        <RouterProvider router={router} />
        <Toast />
      </Suspense>
    </Fragment>
  )
}

export default App
