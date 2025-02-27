import { Box, Container, Paper, Typography, TextField, Alert } from '@mui/material'
import { useState } from 'react'
import { z } from 'zod'

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character')

export default function PasswordValidationDemo() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validatePassword = (value) => {
    const result = passwordSchema.safeParse(value)
    setError(result.success ? '' : result.error.issues[0].message)
    return result.success
  }

  const handlePasswordChange = (event) => {
    const value = event.target.value
    setPassword(value)
    validatePassword(value)
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Password Validation Demo
          </Typography>

          <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              error={!!error}
              helperText="Your password must include at least 8 characters with one uppercase letter, one number, and one special character"
              sx={{ mb: 2 }}
            />

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            {!error && password && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Password meets all requirements
              </Alert>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}