import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Form } from './Components/Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Form/>
  </StrictMode>,
)
