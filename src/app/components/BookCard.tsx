"use client"
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

function BookCard() {

    const router = useRouter();

    const handleclickbookdetails = () => {
        router.push('/BookDetails')
    }

    return (
        <Box sx={{ width: "250px" }}>
            <Card
                onClick={handleclickbookdetails}
                sx={{ maxWidth: '250px', mb: 2, backgroundColor: '#FCDFA0', alignItems: 'center', borderRadius: '15px', border: "1px solid" }}>
                <CardActionArea>
                    <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
                        <CardMedia
                            loading="lazy"
                            component="img"
                            image="/book2.jpg"
                            sx={{ backgroundColor: "white", height: "200px", width: "80%" }}
                            alt="Shrimad Bhaghwatgita"
                        />
                    </Box>
                    <CardContent>
                        <Box sx={{ backgroundColor: "#FCDFA0", padding: "1PX" }}>
                            <Typography variant="h4" sx={{ fontSize: "large", fontWeight: "bold" }}>
                                Bhagvad Gita-As it is
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "10px", color: "gray" }}>
                                By Srila Prabhupad
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="h6" sx={{ fontSize: "8px", color: "gray" }}>
                                    12 Jan 2024
                                </Typography>
                                <Box>
                                    <div 
                                        onClick={() => router.push('/BookDetails')}
                                        style={{
                                            fontWeight:"bold",
                                            display:"flex",
                                            justifyContent:"center",
                                            width:"50px",
                                            border: "1px solid black",
                                            color: "white",
                                            fontSize: "10px",
                                            backgroundColor: "#81311A",
                                            borderRadius: 5,
                                            height: "20px",
                                            padding: "5px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Buy
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
};

export default BookCard;
