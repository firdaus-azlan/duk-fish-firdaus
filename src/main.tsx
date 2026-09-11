import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const root = document.getElementById('root')!

// The entry document contains a semantic HTML shell for crawlers and no-JS users.
// React owns the same root once JavaScript is available, preserving the existing SPA.
createRoot(root).render(
  <StrictMode><App /></StrictMode>,
)

requestAnimationFrame(() => root.classList.add('app-ready'))
