"use client"
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import FilterBar from '../components/FilterBar'
import BookCard from '../components/BookCard'
import TopicOne from '../components/TopicOne'
import RelatedBookText from '../components/RelatedBookText'
import RESVisited from '../components/RESVisited'
import ReleatedBooksTopics from '../components/ReleatedBooksTopics'
import { useRouter } from 'next/navigation'

const BookCardsPage = () => {

    const router = useRouter();

    const matches = useMediaQuery("(min-width:600px)");

    const handleclickartickenextpage = () => {
        router.push('/BookDetails')
    }

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                        <b>Home /</b> Books
                    </Typography>
                    <Box>
                        <FilterBar />
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                        <Box display={"flex"} flexDirection={"column"} mt={2}>

                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <BookCard />
                                <BookCard />
                                <BookCard />
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} mt={5} gap={5} flexWrap={"wrap"}>
                                <BookCard />
                                <BookCard />
                                <BookCard />
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} mt={5} gap={5} flexWrap={"wrap"}>
                                <BookCard />
                                <BookCard />
                                <BookCard />
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={10} mt={!matches ? 0 : 2} >
                            <ReleatedBooksTopics />
                            <ReleatedBooksTopics />
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={!matches ? 5 : 0}>
                        <Button variant="outlined"
                            // onClick={handleclickbookcardspage}
                            sx={{
                                border: "1px solid black",
                                color: "white",
                                backgroundColor: "#81311A",
                                p: 1,
                                mt: 5,
                                mb: 5,
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
            </Box>
        </div>
    )
}

export default BookCardsPage
