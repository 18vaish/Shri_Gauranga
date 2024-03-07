import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import FilterBar from '../components/FilterBar'
import RESVisited from '../components/RESVisited'
import RelatedBookText from '../components/RelatedBookText'
import CardData from '../components/card'
import TopicTwo from '../components/TopicTwo'

const ArticleCardsPage = () => {
    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                        <b> Home /</b> Articles
                    </Typography>
                    <Box>
                        <FilterBar />
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <CardData />
                            <CardData />
                            <CardData />
                            <TopicTwo />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <CardData />
                            <CardData />
                            <CardData />
                            <RESVisited />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            <CardData />
                            <CardData />
                            <CardData />
                            <RelatedBookText />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mb: 2, borderRadius: 3, width: "100px", fontWeight: "bold" }}>Load More</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default ArticleCardsPage
