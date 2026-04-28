import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface collectionCardProps {
  imageUrl: string;
  name: string;
  collectionUrl: string;
}

const CollectionCard = (props: collectionCardProps) => {
  const { imageUrl, name, collectionUrl } = props;
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        width: "100%",
        aspectRatio: "1 / 1",
        position: "relative",
      }}
    >
      <Link
        style={{
          position: "absolute",
          inset: 0,
        }}
        href={collectionUrl}
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 600px) 33vw, (max-width: 900px) 33vw, 320px"
          style={{ objectFit: "cover" }}
        />
      </Link>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "white",
          fontSize: { xs: "1rem", md: "2rem" },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default CollectionCard;
