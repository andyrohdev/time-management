import React, { useState } from 'react'
import { TextField, Button, Paper, Typography } from '@mui/material'
import './LoginView.css'
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

function LoginView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await AuthService.login(username, password)
      alert('Login successful!')
      navigate('/dashboard')
    } catch (err) {
      alert('Invalid credentials!')
    }
  }

  return (
    <Paper className="login-container" elevation={3}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField label="Username" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
    </Paper>
  )
}

export default LoginView
