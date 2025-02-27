// src/pages/LanguageChange.jsx
import { useContext } from 'react'
import { Box, Container, FormControl, InputLabel, Select, MenuItem, Typography, Paper, Button } from '@mui/material'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../translations/translations'

export default function LanguageChange() {
  const { language, setLanguage } = useContext(LanguageContext)

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ mb: 4 }}>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel>Language</InputLabel>
            <Select value={language} onChange={handleLanguageChange} label="Language">
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="h4" gutterBottom>
            {translations[language].title}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {translations[language].description}
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            {translations[language].greeting}
          </Typography>

        </Box>
      </Paper>
    </Container>
  )
}