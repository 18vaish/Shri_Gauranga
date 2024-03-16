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

    

    return (
        <Box sx={{ backgroundColor: "#FEFCEA" }}>
            <Typography variant='h6' p={2} fontSize="small">
                <b> Home /</b> Articles
            </Typography>
          
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