import CollectionCard from "./CollectionCard";
import { Box, Typography } from "@mui/material";
import { mergedList } from "@/lib/collections";

const CollectionList = () => {
  const displayCollections = mergedList;
  return (
    <Box sx={{ p: 4, mt: 4 }}>
      <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
        Collection
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 2,
        }}
      >
        {displayCollections.map((collection, index) => (
          <CollectionCard
            key={index}
            imageUrl={collection.imageUrl}
            name={collection.name}
            collectionUrl={collection.collectionUrl}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CollectionList;
