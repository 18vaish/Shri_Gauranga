"use client"
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { useRouter } from 'next/navigation';

function CardData() {

    const router = useRouter();

    const handleclickarticledetails = () => {
        router.push('/ArticleDetails')
    }

    const booklets = [
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
    ];

    return (
        <Box>
            {[0, 1, 2].map((index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                    {booklets.slice(index * 3, (index + 1) * 3).map((booklet, i) => (
                        <Card key={index * 3 + i} onClick={handleclickarticledetails} sx={{ width: '250px', mb: 2, backgroundColor: '#FCDFA0', borderRadius: 3 }}>
                            <CardMedia
                                component="img"
                                loading="lazy"
                                height="100"
                                sx={{ borderRadius: 3 }}
                                image={booklet.image}
                                alt={booklet.name}
                            />
                            <CardContent sx={{ padding: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{booklet.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {booklet.information}
                                </Typography>
                            </CardContent>
                            <CardActionArea >
                            <Box  sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",p:1}}>
                                    <Typography variant="h6" sx={{ fontSize: "9px", color: "gray" }}>
                                        1 Jan 2023
                                    </Typography>
                                        <ShareIcon sx={{ color: "#81311A" }} />
                                </Box>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            ))}
        </Box>
    );
};

export default CardData;
