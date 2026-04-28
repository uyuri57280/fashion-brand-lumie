import { getCollectionDetail } from "@/lib/collections";
import { Box, Typography } from "@mui/material";
import React from "react";

const CollectionDetailInfo = ({ item }: { item: string }) => {
  const displayDetailInfo = getCollectionDetail(item);
  return (
    <Box sx={{ px: { xs: 4, md: 16 }, py: 4 }}>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {displayDetailInfo[0].name}
      </Typography>
      <Typography sx={{ whiteSpace: "pre-line" }}>
        {displayDetailInfo[0].description}
      </Typography>
    </Box>
  );
};

export default CollectionDetailInfo;
