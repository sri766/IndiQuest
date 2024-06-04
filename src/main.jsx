import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Font from './components/Font/Font.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Font>
        <App />
      </Font>
    </BrowserRouter>
)
