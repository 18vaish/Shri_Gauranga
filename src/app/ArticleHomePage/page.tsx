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
        <Box sx={{ backgroundColor: "#FEFCEA" }}>
            <Typography variant='h6' p={2} fontSize="small">
                <b> Home /</b> Articles
            </Typography>
            <ImageSlider />
            <FilterBar />
            <Box display="flex" justifyContent="center" gap={5} flexWrap="wrap" >
                <Box display="flex" flexDirection="column">
                    <Section title="Featured" />
                    <Section title="Popular" />
                    <Section title="Recent" />
                </Box>
                <Box display="flex" flexDirection="column" gap={10} mt={matches ? 5 : 0}>
                    <TopicTwo />
                    <RESVisitedArticle />
                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mt={matches ? 0 : 5}>
                <Button variant="outlined" onClick={handleclickartickenextpage} sx={{
                    border: "1px solid black",
                    color: "white",
                    backgroundColor: "#81311A",
                    p: 1, mb: 2,
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
    );
};

const Section = ({ title }: { title: string }) => (
    <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", justifyContent:'flex-start' ,mr:5}}>
            {title}
        </Typography>
        <Box display="flex" justifyContent="center" gap={5} flexWrap="wrap" m={2}>
            <CardData />
            <CardData />
            <CardData />
        </Box>
    </Box>
);


export default ArticlePage;