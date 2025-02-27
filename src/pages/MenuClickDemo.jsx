// src/pages/MenuClickDemo.jsx
          import { Container, Paper, Typography, IconButton, Menu, MenuItem, List, ListItem, ListItemText } from '@mui/material'
          import MoreVertIcon from '@mui/icons-material/MoreVert'
          import { useState } from 'react'

          export default function MenuClickDemo() {
            const [anchorEl, setAnchorEl] = useState(null)
            const [selectedItem, setSelectedItem] = useState(null)

            const items = [
              { id: 1, title: 'Project Alpha', status: 'Active' },
              { id: 2, title: 'Project Beta', status: 'Pending' },
              { id: 3, title: 'Project Gamma', status: 'Completed' }
            ]

            const handleMenuClick = (event, itemId) => {
              setAnchorEl(event.currentTarget)
              setSelectedItem(itemId)
            }

            const handleMenuClose = () => {
              setAnchorEl(null)
              setSelectedItem(null)
            }

            const handleAction = (action) => {
              console.log(`${action} item ${selectedItem}`)
              handleMenuClose()
            }

            return (
              <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Menu Click Demo
                  </Typography>

                  <List sx={{ mt: 4 }}>
                    {items.map((item) => (
                      <ListItem
                        key={item.id}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            onClick={(e) => handleMenuClick(e, item.id)}
                            aria-label="more"
                          >
                            <MoreVertIcon />
                          </IconButton>
                        }
                        sx={{
                          bgcolor: 'background.paper',
                          mb: 1,
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: 'divider'
                        }}
                      >
                        <ListItemText
                          primary={item.title}
                          secondary={`Status: ${item.status}`}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Menu
                    id="menu-actions"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <MenuItem onClick={() => handleAction('Edit')}>Edit</MenuItem>
                    <MenuItem onClick={() => handleAction('Delete')}>Delete</MenuItem>
                    <MenuItem onClick={() => handleAction('Archive')}>Archive</MenuItem>
                  </Menu>
                </Paper>
              </Container>
            )
          }