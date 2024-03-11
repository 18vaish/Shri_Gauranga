"use client"
import React from 'react'
import ImageSlider from './components/ImageSlider'
import MyProfile from './MyProfile/page'
import { Box, Typography, useMediaQuery } from '@mui/material'
import BookCard from './components/BookCard'
import BookletCard from './components/BookletCard'
import SearchDropdown from './components/SearchDropdown'
import SideComponent from './components/SideComponent'
import TopicOne from './components/TopicOne'

const HomePage = () => {

    const matches = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                    <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                        <b>Home /</b>
                    </Typography>
                    <Box p={2}>
                        <SearchDropdown />
                    </Box>
                </Box>
                <Box>
                    <ImageSlider />
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Box>
                            <Box display={"flex"} justifyContent={!matches ? "center" : "flex-start"} gap={3}>
                                <Typography variant='h6' mb={2} mt={5} sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                    Article
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <MyProfile />
                                <MyProfile />
                                <MyProfile />
                            </Box>
                            <Typography display={"flex"} justifyContent={!matches ? "center" : "end"} color={!matches ? "grey" : "black"}fontWeight={"bold"}>
                                See More ...
                            </Typography>
                        </Box>
                        <Box>
                            <Box display={"flex"} justifyContent={!matches ? "center" : "flex-start"} gap={3}>
                                <Typography variant='h6' mb={5} sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                    Books
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <BookCard />
                                <BookCard />
                                <BookCard />
                            </Box>
                            <Typography display={"flex"} justifyContent={!matches ? "center" : "end"} color={!matches ? "grey" : "black"}fontWeight={"bold"}>
                                See More ...
                            </Typography>
                        </Box>
                        <Box >
                            <Box display={"flex"} justifyContent={!matches ? "center" : "flex-start"} gap={3}>
                                <Typography variant='h6' mb={5} mt={2} sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                    Booklets
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} gap={5} flexWrap={"wrap"}>
                                <BookletCard />
                                <BookletCard />
                                <BookletCard />
                            </Box>
                            <Typography display={"flex"} justifyContent={!matches ? "center" : "end"} color={!matches ? "grey" : "black"} fontWeight={"bold"} mb={5}>
                                See More ...
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={15} mt={!matches ? 0 : 12}>
                        <SideComponent />
                        <TopicOne />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default HomePage
