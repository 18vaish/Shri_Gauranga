"use client"
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import CardData from '../components/card'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import FilterBar from '../components/FilterBar'
import TopicOne from '../components/TopicOne'
import { useRouter } from 'next/navigation'
import TopicTwo from '../components/TopicTwo'
import RESVisitedArticle from '../components/RESVisitedArticle'

const ArticlePage = () => {

    const router = useRouter();

    const matches = useMediaQuery("(min-width:600px)");

    const handleclickartickenextpage = () => {
        router.push('/ArticleCardsPage')
    }

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6' p={2} fontSize={"small"}>
                        <b> Home /</b> Articles
                    </Typography>
                </Box>
                <Box>
                    <ImageSlider />
                </Box>
                <Box>
                    <FilterBar />
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Box>
                            <Box display={"flex"} justifyContent={!matches ? "center" : "flex-start"} gap={3}>
                                <Typography variant='h6' sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                    Featured
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <CardData />
                                <CardData />
                                <CardData />
                            </Box>
                        </Box>
                        <Box>
                            <Box display={"flex"} justifyContent={!matches ? "center" : "flex-start"} gap={3} >
                                <Typography variant='h6' sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                    Popular
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <CardData />
                                <CardData />
                                <CardData />
                            </Box>
                        </Box>
                        <Box>
                            <Box display={"flex"} justifyContent={!matches ? "center" : "flex-start"} gap={3} >
                                <Typography variant='h6' sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                    Recent
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <CardData />
                                <CardData />
                                <CardData />
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={10} mt={!matches ? 0 : 5} >
                        <TopicTwo />
                        <RESVisitedArticle />
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={!matches ? 5 : 0}>
                    <Button variant="outlined"
                        onClick={handleclickartickenextpage}
                        sx={{
                            border: "1px solid black",
                            color: "white",
                            backgroundColor: "#81311A",
                            p: 1, mb: 2,
                            borderRadius: 3,
                            width: "110px",
                            fontWeight: "bold",
                            '&:hover': {
                                backgroundColor: "#81311A",
                                border:"2px solid black"
                            }
                        }}>
                        Load More
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default ArticlePage
