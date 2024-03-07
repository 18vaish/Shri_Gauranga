"use client"
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import MyProfile from '../MyProfile/page'
import { Box, Typography, useMediaQuery } from '@mui/material'
import BookCard from '../components/BookCard'
import BookletCard from '../components/BookletCard'
import SearchDropdown from '../components/SearchDropdown'
import SideComponent from '../components/SideComponent'

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
                <Box>
                    <Box sx={{ display: "flex", gap: 5, mt: 2, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: !matches ? 20 : 25, textDecoration: 'underline' }}>
                            Article
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 5, mt: 2, justifyContent: "center", flexWrap: "wrap" }}>
                        <MyProfile />
                        <MyProfile />
                        <MyProfile />
                        <SideComponent />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 5, mt: 2, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: !matches ? 20 : 25, textDecoration: 'underline' }}>
                            Books
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 5, mt: 2, justifyContent: "center", flexWrap: "wrap" }}>
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <SideComponent />
                    </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: "flex", gap: 5, mt: 2, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Booklets
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 5, mt: 2, justifyContent: "center", flexWrap: "wrap" }}>
                        <BookletCard />
                        <BookletCard />
                        <BookletCard />
                        <SideComponent />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default HomePage
