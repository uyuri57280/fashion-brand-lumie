import Box from '@mui/material/Box';
import MainContent from '@/components/MainContent';
import Category from '@/components/Category';
import CollectionList from '@/components/CollectionList';

export default function Home() {
  return (
    <Box sx={{ mb: 20 }}>
      <MainContent />
      <Category />
      <CollectionList />
    </Box>
  );
}
