import Image from 'next/image'
import { Box, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';



const MainContent = () => {
  return (
    <Box component='section'>
      {/* <div className='absolute'> */}
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
        <Image src="/toppage/skirt.jpg" alt="girl-skirt" fill style={{ objectFit: 'cover' }} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '80%',
            transform: 'translate(-50%,-50%)'
          }}
        >
          <Typography variant='topDisplay' sx={{ textAlign:'center', fontSize:'3rem' }}>
            LUMIE2026
          </Typography>
          <Typography variant='topDisplay' sx={{ color: 'black', textAlign:'center' }}>
            DayDream
          </Typography>
          <Typography variant='accentDisplay' sx={{ color: pink[50], textAlign: 'right' }}>
            Collection
          </Typography>
        </Box>

      </Box>
      <Box sx={{ position: 'relative', justifyItems: 'center', alignItems: 'center' }}>
      </Box>
    </Box>
  )
}

export default MainContent