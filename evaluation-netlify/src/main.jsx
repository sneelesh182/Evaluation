import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FetchContextProvider } from './Contexts/FetchContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(


    
    <BrowserRouter>
   
<FetchContextProvider>
<App />
</FetchContextProvider>
</BrowserRouter>


)
