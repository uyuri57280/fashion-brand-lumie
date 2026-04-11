import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialUILink from '@mui/material/Link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Button from '@mui/material/Button';
import Link from '@/components/Link';
import MainContent from '@/components/MainContent';
import Category from '@/components/Category';
import CollectionList from '@/components/CollectionList';

export default function Home() {
  return (
    <>
      <Box sx={{mb:20}}>
        <MainContent />
        <Category />
        <CollectionList />
        <Container>
          <Box
            sx={{
              my: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" component={Link} href="/about">
              Go to the about page
            </Button>
            <Copyright />
          </Box>
        </Container>
      </Box>

    </>

  );
}
