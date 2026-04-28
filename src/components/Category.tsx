import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories1 = [
    {
        name: 'All',
        href: '/',
    },
    {
        name: 'Dress',
        href: '/',
    },
    {
        name: 'Tops',
        href: '/',
    },
    {
        name: 'Skirts',
        href: '/',
    },
    {
        name: 'Pants',
        href: '/',
    },
    {
        name: 'Outer',
        href: '/',
    },
    {
        name: 'Bag',
        href: '/',
    },
]

const categories2 = [
    {
        name: 'Bag',
        href: '/',
    },
    {
        name: 'Shoes',
        href: '/',
    },
    {
        name: 'Limited',
        href: '/',
    },
]
const Category = () => {
    return (
        <Box>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 2 }} className='p-8 flex flex-col gap-4'>
                <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }} >CATEGORY</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
                    {categories1.map((categorie, index) => (
                        <Link href="/" key={index}>
                            <Typography sx={{fontSize:'0.875rem', fontWeight:'bold', textDecoration:'underline'}}>{categorie.name}</Typography>
                        </Link>
                    ))}
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', gap:4, flexWrap: 'wrap'}}>
                    {categories2.map((categorie, index) => (
                        <Link href="/" key={index}>
                            <Typography sx={{fontSize:'0.875rem', fontWeight:'bold', textDecoration:'underline'}}>{categorie.name}</Typography>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 4, px: 4 }}>
                <Box sx={{ position: 'relative', flex: 1, aspectRatio: '190 / 220', maxWidth: 280 }}>
                    <Image src="/category/girl-dress2.jpg" alt="girl-dress" fill style={{ objectFit: 'cover' }} />
                </Box>
                <Box sx={{ position: 'relative', flex: 1, aspectRatio: '190 / 220', maxWidth: 280 }}>
                    <Image src="/category/girl-dress2.jpg" alt="girl-dress" fill style={{ objectFit: 'cover' }} />
                </Box>
            </Box>

        </Box>
    )
}

export default Category