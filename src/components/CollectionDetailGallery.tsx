'use client'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import { getCollectionDetail } from '@/lib/collections';

const CollectionDetailGallery = ({ item }: { item: string }) => {
    const [selectedIndex, setselectedIndex] = useState(0);
    const displayDetailGallery = getCollectionDetail(item);

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
                    position: 'relative'
                }}
            >
                {displayDetailGallery.length > 0 && (
                    <Image
                        src={displayDetailGallery[selectedIndex].imageUrl}
                        alt='skirt'
                        width={300}
                        height={400}
                        loading="eager"
                        style={{ width: '100%', height: 'auto' }}
                    />
                )}
                {/* 画像切り替えボタン */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(0%,-50%)'
                }}>
                    {(displayDetailGallery.length > 1) && (
                        <Stack direction="row" spacing={35} sx={{ alignItems: 'center' }}>
                            <IconButton
                                size='large'
                                onClick={() => {
                                    setselectedIndex((i) => (i - 1 + displayDetailGallery.length) % displayDetailGallery.length);
                                }}
                                sx={{
                                    bgcolor: grey[300],
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: grey[500]
                                    },
                                    opacity: 0.7
                                }}
                            >
                                <ExpandLessIcon sx={{ transform: 'rotate(-90deg)' }} fontSize='inherit' />
                            </IconButton>
                            <IconButton
                                size='large'
                                onClick={() => {
                                    setselectedIndex((i) => (i + 1) % displayDetailGallery.length);
                                }}
                                sx={{
                                    bgcolor: grey[300],
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: grey[500]
                                    },
                                    opacity: 0.7
                                }}
                            >
                                <ExpandLessIcon sx={{ transform: 'rotate(90deg)' }} fontSize='inherit' />
                            </IconButton>
                        </Stack>
                    )}
                </Box>
            </Box>


            {/* 下 画像を小さく一覧表示 */}
            {(displayDetailGallery.length > 1) && (
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2 }}>
                    {displayDetailGallery.map((image, index) => (
                        <Image
                            key={index}
                            src={image.imageUrl}
                            alt={image.name}
                            width={80}
                            height={100}
                            onClick={() => {
                                setselectedIndex(index);
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    )
}

export default CollectionDetailGallery