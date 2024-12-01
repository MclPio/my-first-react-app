import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import { FavoriteFood } from './FavoriteFood.jsx'
import TestTitle from './TestTitle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <TestTitle />
  </StrictMode>,
)
