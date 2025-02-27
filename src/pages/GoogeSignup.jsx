import {Box, Container, Paper, Typography} from '@mui/material'
import {SignUp} from '@clerk/clerk-react'

export default function GoogleSignup() {
    return (
        <Container maxWidth="md" sx={{py: 8}}>
            <Paper elevation={3} sx={{p: 4, borderRadius: 2}}>
                <Box sx={{textAlign: 'center', mb: 4}}>
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
                        Google Sign In
                    </Typography>

                    <SignUp appearance={{
                        elements: {
                            rootBox: {
                                margin: '0 auto',
                                maxWidth: '400px'
                            },
                            card: {
                                border: '1px solid #e0e0e0',
                                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                            },
                            socialButtonsBlockButton: {
                                border: '1px solid #e0e0e0',
                                boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5'
                                }
                            }
                        }
                    }}>
                    </SignUp>
                </Box>
            </Paper>
        </Container>
    )
}