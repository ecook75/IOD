import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import './index.css'
import App from './App.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App />
    </ErrorBoundary>
  </StrictMode>,
)
