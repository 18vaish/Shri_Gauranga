"use client"
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FilterBar from '../components/FilterBar'
import RelatedBookText from '../components/RelatedBookText'
import RESVisited from '../components/RESVisited'
import BookletCard from '../components/BookletCard'

const BookletCardsPage = () => {
    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6'p={2} sx={{ fontSize: "small" }}>
                        <b>Home /</b> Booklet
                    </Typography>
                    <Box>
                        <FilterBar />
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, mb: 3, mt: 3, textDecoration: 'underline' }}>
                                Featured
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <BookletCard />
                            <BookletCard />
                            <BookletCard />
                            <RelatedBookText />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, mb: 3, mt: 3, textDecoration: 'underline' }}>
                                Popular
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <BookletCard />
                            <BookletCard />
                            <BookletCard />
                            <RESVisited />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, mb: 3, mt: 3, textDecoration: 'underline' }}>
                                Rescent
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <BookletCard />
                            <BookletCard />
                            <BookletCard />
                            <RelatedBookText />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mb: 2, borderRadius: 3, width: "100px", fontWeight:"bold" }}>Load More</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default BookletCardsPage
