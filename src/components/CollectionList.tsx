import React from 'react'
import CollectionCard from './CollectionCard'
import { Box, Typography } from '@mui/material'

const collections = [
    {
        imageUrl: "/collection/bear.JPG",
        name: "bear",
        collectionUrl: "/collection",
    },
    {
        imageUrl: "/collection/eyemask.JPG",
        name: "eyemask",
        collectionUrl: "/collection",
    },
    {
        imageUrl: "/collection/mail.JPG",
        name: "mail",
        collectionUrl: "/collection",
    },
    {
        imageUrl: "/collection/roses.JPG",
        name: "roses",
        collectionUrl: "/collection",
    },
    {
        imageUrl: "/collection/shoes.JPG",
        name: "shoes",
        collectionUrl: "/collection",
    },
]

const CollectionList = () => {
    return (
        <Box sx={{p:4, mt:4}}>
            <Typography sx={{fontSize:'2rem', fontWeight:'bold'}}>Collection</Typography>
            <Box sx={{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                gap:2,
            }}>
                {collections.map((collection, index) => (
                    <CollectionCard
                        key={index}
                        imageUrl={collection.imageUrl}
                        name={collection.name}
                        collectionUrl={collection.collectionUrl}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default CollectionList