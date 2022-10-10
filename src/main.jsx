import React from 'react'
import ReactDOM from 'react-dom/client'
import StateProvider from './context/StateProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
)
