"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ImageSlider from '../components/ImageSlider'
import BookCard from '../components/BookCard'
import FilterBar from '../components/FilterBar'
import { useRouter } from 'next/navigation'
import TopicTwo from '../components/TopicTwo'

const BookHomePage = () => {

    const router = useRouter();

    const handleclickbookcardspage = () => {
        router.push('/BookCardsPage')
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
                        <b>Home /</b> Books
                    </Typography>
                </Box>
                <Box>
                    <ImageSlider />
                    <Box>
                        <Box>
                            <FilterBar />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, mb: 3, mt: 3, textDecoration: 'underline' }}>
                                Featured
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <TopicTwo />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, mb: 3, mt: 3, textDecoration: 'underline' }}>
                                Popular
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <TopicTwo />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, mb: 3, mt: 3, textDecoration: 'underline' }}>
                                Rescent
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <TopicTwo />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined"
                            onClick={handleclickbookcardspage}
                            sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mt: 5, mb: 2, borderRadius: 3, width: "100px" }}><b>Load More</b></Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default BookHomePage
