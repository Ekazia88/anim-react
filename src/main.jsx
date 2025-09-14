import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { GlobalContextProvider } from './context/global'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    </BrowserRouter>
)