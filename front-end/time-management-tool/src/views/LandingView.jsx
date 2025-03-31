import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import './LandingView.css'

function LandingView() {
  const navigate = useNavigate()

  return (
    <div className='landing-container'>
      <h1>Simple Time Management App</h1>
      <p></p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/dashboard')}
      >
        Get Started
      </Button>
      <Button
        variant="text"
        color="secondary"
        onClick={() => navigate('/tutorial')}

      >
        Show me the tutorial
      </Button>
    </div>
  )
}

export default LandingView
