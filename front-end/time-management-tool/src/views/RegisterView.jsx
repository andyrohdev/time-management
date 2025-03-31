import React, { useState } from 'react'
import { TextField, Button, Paper, Typography } from '@mui/material'
import './RegisterView.css'
import AuthService from '../services/AuthService'

function RegisterView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      await AuthService.register(username, password)
      alert('Registered successfully!')
    } catch (err) {
      alert('Registration failed!')
    }
  }

  return (
    <Paper className="register-container" elevation={3}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <TextField label="Username" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>Register</Button>
    </Paper>
  )
}

export default RegisterView
