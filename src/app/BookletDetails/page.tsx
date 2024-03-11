"use client";

import { Box, Button, Grid, IconButton, InputAdornment, Rating, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import ShareIcon from '@mui/icons-material/Share';
import * as React from 'react';
import SubscribeModelBox from "../components/SubscribeModelBox";
import CardSlider from "../components/CardSlider";
import { Search } from "@mui/icons-material";
import { useState } from 'react';
import BookletCard from "../components/BookletCard";


const BookletDetailsPage = () => {

    const matches = useMediaQuery("(min-width:600px)")
    const [value, setValue] = React.useState<number | null>(0);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event:any) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', p: 2, backgroundColor:  "#FEFCEA" }}>
                    <Typography variant='h6' p={2} fontSize={'small'}>
                    Home / Booklet / Bhagvad Gita-As it is By Srila Prabhupad
                    </Typography>
                    <TextField
                        size='small'
                        placeholder="Search"
                        sx={{ borderRadius: 3, border: "1px solid" }}
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Grid container justifyContent={"center"} width={!matches ? "380px" : "100%"} sx={{ backgroundColor: "#FEFCEA" }}> {/* #F5F5F5 */}
                    <Grid container justifyContent={"center"} width={!matches ? "380px" : "80%"} sx={{ backgroundColor: "#F5F5F5" }}>
                        <Grid item md={6} p={2}>
                            <Box display={"flex"} justifyContent={'start'} flexDirection={!matches ? "column" : "row-reverse"} gap={1}>
                                <Image priority={false} loading="lazy" src="/book2.jpg" height={350} width={350} alt="book" />
                                <Stack gap={2} direction={!matches ? "row" : "column"} justifyContent={!matches ? "center" : "start"}>
                                    <Image src="/book3.png" loading="lazy" height={50} width={50} alt="book" />
                                    <Image src="/image-removebg-preview (25) 1 (2).png" loading="lazy" height={50} width={50} alt="book" />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item md={6} p={2}>
                            <Box display={"flex"} gap={2} alignItems={"center"}>
                                <Typography variant="h5" >
                                    Bhagvad Gita-As it is By Srila Prabhupad
                                </Typography>
                                <Box sx={{ color: "#555555", mt: 1 }}>
                                    <ShareIcon />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: "center", height: 5, width: 1, mt: 1, mb: 2 }}>
                                <Rating name="read-only" value={4} size="small" readOnly />
                                <Typography component="legend">8 Reviews</Typography>
                            </Box>
                            <Typography variant="h5">
                                ₹199
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "small" }}>
                                The Bhagavad Gita, often referred to as the Gita, is a 700-verse<br />
                                Hindu scripture, which is part of the epic Mahabharata. It <br />
                                forms the chapters 23–40 of book 6 of the Mahabharata called<br />
                                the Bhishma Parva.
                            </Typography>
                            <Typography variant="h6">
                                Specifications
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "small" }}>
                                <b>Book :</b> Shrimad Bhagwat Gita Yatharoop <br />
                                <b>Author :</b> A.C BHAKTIVEDANT SWAMI SHRILA PRABHUPAD<br />
                                <b>Binding :</b> Hardcover<br />
                                <b>Publishing Date :</b> 2019<br />
                                <b>Publisher :</b> BHAKTIVEDANT BOOK TRUST<br />
                                <b>Edition :</b> 2019<br />
                                <b>Number of Pages :</b> 644<br />
                                <b>Language :</b> Hindi<br />
                            </Typography>
                            <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", mt: 1, borderRadius: 3, width: "100px", fontWeight:"bold"}}>Buy</Button>
                        </Grid>
                        <Grid container justifyContent={!matches ? "flex-start" : "center"} alignItems={"flex-start"}>
                            {/* <Box mt={5} ml={!matches ? 0 : 5} >
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    Related Books
                                </Typography>
                            </Box> */}
                            <Box>
                                <Box mt={5}>
                                    <Typography variant='h6' sx={{ fontWeight: "bold", mt: 5, mb: 5, ml:!matches ? 15 : 0 }}>
                                        Related Books
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                                        <BookletCard />
                                        <BookletCard />
                                        <BookletCard />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", mt: 5 }}>
                                        <BookletCard />
                                        <BookletCard />
                                        <BookletCard />
                                    </Box>
                                </Box>
                            </Box>
                            <Grid item xs={12}>
                                <CardSlider />
                                <Box sx={{ backgroundColor: "#FEFCEA", p:1 }}>
                                    <SubscribeModelBox />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Box>
        </div >
    )
}

export default BookletDetailsPage;




