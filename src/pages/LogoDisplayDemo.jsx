import { Box, Container, Paper, Typography, Avatar, Grid, Divider, CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react'

// Simulated API call
const fetchCompanyData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'TechCorp Solutions',
          regId: 'TC-2024-0123',
          logo: '/vite.svg'
        }
      ])
    }, 1000)
  })
}

export default function LogoDisplayDemo() {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const data = await fetchCompanyData()
        setCompanies(data)
      } catch (error) {
        console.error('Error fetching companies:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCompanies()
  }, [])

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Container>
    )
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
            Company Logo Display
          </Typography>

          <Box sx={{ mt: 4 }}>
            {companies.map((company, index) => (
              <Box key={company.id}>
                <Grid container spacing={3} alignItems="center" sx={{ py: 2 }}>
                  <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                    <Avatar
                      src={company.logo}
                      alt={company.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        border: '2px solid #e0e0e0',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h6" gutterBottom>
                      {company.name}
                    </Typography>
                    <Typography color="text.secondary">
                      Registration ID: {company.regId}
                    </Typography>
                  </Grid>
                </Grid>
                {index < companies.length - 1 && <Divider sx={{ my: 2 }} />}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}