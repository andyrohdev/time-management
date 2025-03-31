import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingView from './views/LandingView'
import DashboardView from './views/DashboardView'
import TutorialView from './views/TutorialView'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/tutorial" element={<TutorialView />} />
      </Routes>
    </Router>
  )
}

export default App
