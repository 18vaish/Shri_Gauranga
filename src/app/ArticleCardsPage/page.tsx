"use client"
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import FilterBar from '../components/FilterBar'
import RESVisited from '../components/RESVisited'
import RelatedBookText from '../components/RelatedBookText'
import CardData from '../components/card'
import TopicTwo from '../components/TopicTwo'
import RESVisitedArticle from '../components/RESVisitedArticle'

const ArticleCardsPage = () => {

    const matches = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6' p={2} fontSize={"small"}>
                        <b> Home /</b> Articles
                    </Typography>
                </Box>
                <Box>
                    <FilterBar />
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                    <Box display={"flex"} flexDirection={"column"}>

                        <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                            <CardData />
                            <CardData />
                            <CardData />
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                            <CardData />
                            <CardData />
                            <CardData />
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                            <CardData />
                            <CardData />
                            <CardData />
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={10} mt={!matches ? 0 : 2} >
                        <TopicTwo />
                        <RESVisitedArticle />
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={!matches ? 5 : 0}>
                    <Button variant="outlined"
                        // onClick={handleclickartickenextpage}
                        sx={{
                            border: "1px solid black",
                            color: "white",
                            backgroundColor: "#81311A",
                            p: 1, mb: 5,
                            borderRadius: 3,
                            width: "110px",
                            fontWeight: "bold",
                            '&:hover': {
                                backgroundColor: "#81311A",
                                border: "2px solid black"
                            }
                        }}>
                        Load More
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default ArticleCardsPage
