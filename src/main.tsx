import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './i18n/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
