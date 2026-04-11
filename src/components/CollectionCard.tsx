import { Box } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';

interface collectionCardProps {
  imageUrl: string;
  name: string;
  collectionUrl: string;
}

const CollectionCard = (props: collectionCardProps) => {
  const { imageUrl, name, collectionUrl } = props;
  return (
    <Box sx={{
      borderRadius: 2,
      overflow: 'hidden',
      width: { xs: 128, md: 240, lg: 320 },
      height: { xs: 128, md: 240, lg: 320 },
      position: 'relative',
    }}>
      <Link href={collectionUrl}>
        <Image src={imageUrl} alt={name} fill />
      </Link>
    </Box>
  )
}

export default CollectionCard