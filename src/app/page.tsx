"use client"
import React from 'react'
import ImageSlider from './components/ImageSlider'
import MyProfile from './MyProfile/page'
import { Box, Link, Typography, useMediaQuery } from '@mui/material'
import BookCard from './components/BookCard'
import BookletCard from './components/BookletCard'
import SearchDropdown from './components/SearchDropdown'
import SideComponent from './components/SideComponent'
import SideComponentTwo from './components/SideComponentTwo'

const HomePage = () => {

    const matches = useMediaQuery("(min-width:600px)");
    return (
        <Box sx={{ backgroundColor: "#FEFCEA" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                <Typography variant="h6" p={2} sx={{ fontSize: "small" }}>
                    <b>Home /</b>
                </Typography>
                <Box p={2}>
                    <SearchDropdown />
                </Box>
            </Box>
            <ImageSlider />
            <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: !matches ? "center" : "flex-start", gap: 3 }}>
                            <Typography variant="h6" mb={2} mt={5} sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                Article
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            {[...Array(3)].map((_, index) => (
                                <MyProfile key={index} />
                            ))}
                        </Box>
                        <Typography sx={{ display: "flex", justifyContent: !matches ? "center" : "end", fontWeight: "bold" ,mt:2}}>
                            <Link href="/ArticleCardsPage" color="inherit" sx={{textDecoration:'none',fontFamily:'Times New Roman'}}>
                                See More ...
                            </Link>
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: !matches ? "center" : "flex-start", gap: 3 }}>
                            <Typography variant="h6" mb={5} sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                Books
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            {[...Array(3)].map((_, index) => (
                                <BookCard key={index} />
                            ))}
                        </Box>
                        <Typography sx={{ display: "flex", justifyContent: !matches ? "center" : "end", fontWeight: "bold" }}>
                            <Link href="/BookHomePage" color="inherit"sx={{textDecoration:'none',fontFamily:'Times New Roman'}}>
                                See More ...
                            </Link>
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: !matches ? "center" : "flex-start", gap: 3 }}>
                            <Typography variant="h6" mb={5} mt={2} sx={{ fontWeight: "bold", textDecoration: 'underline' }}>
                                Booklets
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
                            {[...Array(3)].map((_, index) => (
                                <BookletCard key={index} />
                            ))}
                        </Box>
                        <Typography sx={{ display: "flex", justifyContent: !matches ? "center" : "end", fontWeight: "bold", mb: 5 }}>
                            <Link href="/BookletCardsPage" color="inherit"sx={{textDecoration:'none',fontFamily:'Times New Roman'}}>
                                See More ...
                            </Link>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 15, mt: !matches ? 0 : 12 }}>
                    <SideComponent />
                    <SideComponentTwo />
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;

