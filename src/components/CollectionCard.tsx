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
    }}>
      <Link style={{
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '100%'
      }} href={collectionUrl}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 600px) 128px, (max-width: 900px) 240px, 320px"
        />
      </Link>
    </Box>
  )
}

export default CollectionCard