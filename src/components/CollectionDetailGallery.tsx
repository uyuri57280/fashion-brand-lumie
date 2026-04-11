'use client'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

const images = [
    {
        src: '/collection/skirt1.jpg',
        name: 'skirt1'
    },
    {
        src: '/collection/skirt2.jpg',
        name: 'skirt2'
    },
    {
        src: '/collection/skirt3.jpg',
        name: 'skirt3'
    },
    {
        src: '/collection/skirt4.jpg',
        name: 'skirt4'
    },
]

const CollectionDetailGallery = () => {
    const [selectedIndex, setselectedIndex] = useState(0);
    const hasMultipleImages = images.length > 1;

    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* 上 選択した画像を大きく1枚表示 */}
            <Box
                sx={{
                    height: 500,
                    width: 400,
                    display: 'flex',
                    lexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position:'relative'
                }}
            >
                <Image
                    src={images[selectedIndex].src}
                    alt='skirt'
                    width={300}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(0%,-50%)'
                }}>
                    <Stack direction="row" spacing={35} sx={{ alignItems: 'center' }}>
                        <IconButton
                            size='large'
                            onClick={() => {
                                setselectedIndex((i) => (i - 1 + images.length) % images.length);
                                console.log("selectedIndex:", selectedIndex);
                            }}
                            sx={{
                                bgcolor: grey[300],
                                color: 'white',
                                '&:hover': {
                                    bgcolor: grey[500]
                                },
                                opacity:0.7
                            }}
                        >
                            <ExpandLessIcon sx={{ transform: 'rotate(-90deg)' }} fontSize='inherit' />
                        </IconButton>
                        <IconButton
                            size='large'
                            onClick={() => {
                                setselectedIndex((i) => (i + 1) % images.length);
                                console.log("selectedIndex:", selectedIndex);
                            }}
                            sx={{
                                bgcolor: grey[300],
                                color: 'white',
                                '&:hover': {
                                    bgcolor: grey[500]
                                },
                                opacity:0.7
                            }}
                        >
                            <ExpandLessIcon sx={{ transform: 'rotate(90deg)' }} fontSize='inherit' />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>


            {/* 下 画像を小さく一覧表示 */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2 }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.name}
                        width={80}
                        height={100}
                        onClick={() => {
                            setselectedIndex(index);
                        }}
                    />
                ))}
            </Box>

        </Box>
    )
}

export default CollectionDetailGallery