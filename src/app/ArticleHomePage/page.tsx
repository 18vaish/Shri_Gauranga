"use client"
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import CardData from '../components/card'
import { Box, Button, Typography } from '@mui/material'
import FilterBar from '../components/FilterBar'
import TopicOne from '../components/TopicOne'
import { useRouter } from 'next/navigation'

const ArticlePage = () => {

    const router = useRouter();

    const handleclickartickenextpage = () => {
        router.push('/ArticleCardsPage')
    }

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                        <b> Home /</b> Articles
                    </Typography>
                </Box>
                <Box>
                    <ImageSlider />
                </Box>
                <Box>
                    <FilterBar />
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, textDecoration: 'underline' }}>
                            Featured
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <TopicOne />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, textDecoration: 'underline' }}>
                            Popular
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <TopicOne />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 20, textDecoration: 'underline' }}>
                            Recent
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <TopicOne />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="outlined"
                        onClick={handleclickartickenextpage}
                        sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mb: 2, borderRadius: 3, width: "100px", fontWeight: "bold" }}>Load More</Button>
                </Box>
            </Box>
        </div>
    )
}

export default ArticlePage
