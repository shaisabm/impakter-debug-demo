import { Box, Container, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

export default function DropdownOverlapDemo() {
  const [dropdown1, setDropdown1] = useState('')
  const [dropdown2, setDropdown2] = useState('')

  const [openDropdown, setOpenDropdown] = useState(null)

  const handleDropdown1 = (event) => {
    setDropdown1(event.target.value)
  }

  const handleDropdown2 = (event) => {
    setDropdown2(event.target.value)
  }

  const handleOpen = (dropdownId) => {
    setOpenDropdown(dropdownId)
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
            Dropdown Overlap Demo
          </Typography>

          <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>First Dropdown</InputLabel>
              <Select
                value={dropdown1}
                label="First Dropdown"
                onChange={handleDropdown1}
                open={openDropdown === 'dropdown1'}
                onOpen={() => handleOpen('dropdown1')}
                onClose={() => handleOpen(null)}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Second Dropdown</InputLabel>
              <Select
                value={dropdown2}
                label="Second Dropdown"
                onChange={handleDropdown2}
                open={openDropdown === 'dropdown2'}
                onOpen={() => handleOpen('dropdown2')}
                onClose={() => handleOpen(null)}
              >
                <MenuItem value={10}>Option A</MenuItem>
                <MenuItem value={20}>Option B</MenuItem>
                <MenuItem value={30}>Option C</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Paper>
</Container>
  )
}