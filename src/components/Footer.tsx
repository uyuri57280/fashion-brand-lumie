import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 8,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Lumie All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer