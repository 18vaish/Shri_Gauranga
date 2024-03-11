"use client"
import { Grid, Box, Typography, IconButton, Card, CardMedia, CardContent, useMediaQuery, CardActionArea } from '@mui/material'
import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import ShareIcon from '@mui/icons-material/Share';
import { useRouter } from 'next/navigation';

const CardSlider = () => {

    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');
    const cardsPerSlide = isMobile ? 1 : 3;

    const handleclickarticledetails = () => {
        router.push('/ArticleDetails')
    }

    const booklets = [
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
    ];

    useEffect(() => {
        // Your side effect code here, if any
        // For example, fetching data when props change
    }, [/* Dependencies that trigger side effects */]);



    return (
        <div>
            <Grid item xs={12} sx={{ padding: 2 }}>
                <Box sx={{ height: 400, width: '100%', backgroundColor: '#FFF0F0' }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="h6" sx={{ color: 'black', paddingTop: '50px', fontWeight: "bold" }}>You may also like</Typography>
                    </Box>
                    <Carousel
                        autoPlay={false}
                        indicators={false}
                        animation="slide"
                        navButtonsAlwaysVisible={true}
                        swipe
                    // swipeable
                    >
                        {[...Array(Math.ceil(booklets.length / cardsPerSlide))].map((_, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', gap: 5, mb: 5 }}>
                                {booklets.slice(index * cardsPerSlide, (index + 1) * cardsPerSlide).map((booklet, i) => (
                                    <Card key={i} onClick={handleclickarticledetails} sx={{ width: '250px', mb: 2, backgroundColor: '#FCDFA0', borderRadius: 3 }}>
                                        <CardMedia
                                            component="img"
                                            loading="lazy"
                                            height={100}
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
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 1 }}>
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
                    </Carousel>
                </Box>
            </Grid>
        </div>
    )
}

export default CardSlider
