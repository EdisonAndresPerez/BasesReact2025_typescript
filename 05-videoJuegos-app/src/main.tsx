import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { VideoJuegosApp } from './VideoJuegosApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <VideoJuegosApp/>
  </StrictMode>
)
