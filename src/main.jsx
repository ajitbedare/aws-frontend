import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './counter.jsx'
import App from './App.jsx'
import { AuthProvider } from './authContext.jsx'
import ProjectRotes from './Routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Router>
      <ProjectRotes/>
    </Router>
  </AuthProvider>,
)
