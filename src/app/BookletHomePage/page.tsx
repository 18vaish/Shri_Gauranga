"use client"
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import ImageSlider from '../components/ImageSlider'
import FilterBar from '../components/FilterBar'
import { useRouter } from 'next/navigation'
import TopicTwo from '../components/TopicTwo'
import BookletCard from '../components/BookletCard'

const BookletHomePage = () => {

    const matches = useMediaQuery("(min-width:600px)");

    const router = useRouter();

    const handleclickbookletcardspage = () => {
        router.push('/BookletCardsPage')
    }

    useEffect(() => {
        // Perform side effects or data fetching here when props change
        // Example:
        // fetchData();
    }, [/* add necessary dependencies here */]);

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                        <b>Home /</b> Booklet
                    </Typography>
                </Box>
                <Box>
                    <ImageSlider />
                    <Box>
                        <Box>
                            <FilterBar />
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <Box>
                                <Box display={"flex"} mt={2} mb={2} justifyContent={!matches ? "center" : "flex-start"} gap={3}>
                                    <Typography variant='h6' sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                        Featured
                                    </Typography>
                                </Box>
                                <Box display={"flex"} justifyContent={"center"} gap={10} flexWrap={"wrap"}>
                                    <BookletCard />
                                    <BookletCard />
                                    <BookletCard />
                                </Box>
                            </Box>
                            <Box>
                                <Box display={"flex"} mt={5} mb={2} justifyContent={!matches ? "center" : "flex-start"} gap={3} >
                                    <Typography variant='h6' sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                        Popular
                                    </Typography>
                                </Box>
                                <Box display={"flex"} justifyContent={"center"} gap={10} flexWrap={"wrap"}>
                                    <BookletCard />
                                    <BookletCard />
                                    <BookletCard />
                                </Box>
                            </Box>
                            <Box>
                                <Box display={"flex"} mt={5} mb={2} justifyContent={!matches ? "center" : "flex-start"} gap={3} >
                                    <Typography variant='h6' sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                        Recent
                                    </Typography>
                                </Box>
                                <Box display={"flex"} justifyContent={"center"} gap={10} flexWrap={"wrap"}>
                                    <BookletCard />
                                    <BookletCard />
                                    <BookletCard />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} mt={!matches ? 5 : 0}>
                        <Button variant="outlined"
                            onClick={handleclickbookletcardspage}
                            sx={{
                                border: "1px solid black",
                                color: "white",
                                backgroundColor: "#81311A",
                                p: 1, mb: 5,
                                mt:5,
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

export default BookletHomePage
