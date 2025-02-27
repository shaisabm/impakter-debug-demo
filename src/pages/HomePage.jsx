import {Box, Container, List, ListItem, ListItemButton, ListItemText, Typography, Paper} from '@mui/material'
import {Link} from 'react-router-dom'

export default function HomePage() {
    const debugDemos = [
        {id: 1, title: 'Language Change', path: '/language-change'},
        {id: 2, title: 'Google Signup', path: '/google-signup'},
        {id: 3, title: 'Password Validation', path: '/password-validation'},
        {id: 4, title: 'Dropdown Overlap', path: '/dropdown-overlap'},
        {id: 5, title: 'Logo Display', path: '/logo-display'},
        {id: 6, title: 'Menu Click', path: '/menu-click'}



    ]

    return (
        <Container maxWidth="md" sx={{py: 8}}>
            <Paper elevation={3} sx={{p: 4, borderRadius: 2}}>
                <Box sx={{textAlign: 'center', mb: 4}}>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        Debug Demo Solutions
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{mb: 4}}>
                        Collection of debugging examples and solutions
                    </Typography>
                </Box>

                <List sx={{bgcolor: 'background.paper', borderRadius: 1}}>
                    {debugDemos.map((demo) => (
                        <ListItem
                            key={demo.id}
                            disablePadding
                            sx={{
                                '&:not(:last-child)': {
                                    borderBottom: 1,
                                    borderColor: 'divider'
                                }
                            }}
                        >
                            <ListItemButton
                                component={Link}
                                to={demo.path}
                                sx={{
                                    py: 2,
                                    '&:hover': {
                                        bgcolor: 'action.hover',
                                        transform: 'scale(1.01)',
                                        transition: 'all 0.2s'
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={demo.title}
                                    primaryTypographyProps={{
                                        fontSize: '1.1rem',
                                        fontWeight: 500
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    )
}