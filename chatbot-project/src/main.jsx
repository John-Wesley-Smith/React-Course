import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
  This code setup the React
  - To calls createRoot, gives the container and render App component to the website

  <StrictMode>
    - gives us some additional checks and warnings when developing our app
*/
