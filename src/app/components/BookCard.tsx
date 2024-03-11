
"use client"
import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

function BookCard() {
    const router = useRouter();

    const handleclickbookdetails = () => {
        router.push('/BookDetails');
    };

    return (
        <Box sx={{ width: "250px" }}>
            <Card
                onClick={handleclickbookdetails}
                sx={{ maxWidth: '250px', mb: 2, backgroundColor: '#FCDFA0', alignItems: 'center', borderRadius: '15px', border: "1px solid" }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
                    <CardMedia
                        loading="lazy"
                        component="img"
                        image="/book2.jpg"
                        sx={{ backgroundColor: "white", height: "200px", width: "80%" }}
                        alt="Shrimad Bhaghwatgita"
                    />
                </Box>
                <CardContent sx={{ padding: 1 }}>
                    <Box sx={{ backgroundColor: "#FCDFA0" }}>
                        <Typography variant="h4" sx={{ fontSize: "large", fontWeight: "bold" }}>
                            Bhagvad Gita-As it is
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "10px", color: "gray" }}>
                            By Srila Prabhupad
                        </Typography>
                    </Box>
                </CardContent>
                <CardActionArea>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",p:1 }}>
                        <Typography variant="h6" sx={{ fontSize: "10px", color: "gray" }}>
                            12 Jan 2024
                        </Typography>
                        <Button
                            onClick={() => router.push('/BookDetails')}
                            style={{
                                fontWeight: "bold",
                                width: "70px",
                                border: "1px solid black",
                                color: "white",
                                fontSize: "10px",
                                backgroundColor: "#81311A",
                                borderRadius: 10,
                                height: "30px",
                                padding: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Buy
                        </Button>
                    </Box>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default BookCard;
