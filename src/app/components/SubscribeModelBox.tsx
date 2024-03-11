"use client"

import { Grid, Box, Typography, TextField, Button, useMediaQuery } from '@mui/material'
import React from 'react'

const SubscribeModelBox = () => {

    const matches = useMediaQuery("(min-width:600px)");

    return (
        <div>
            <Grid container justifyContent={"center"} p={!matches ? 1 : 0} mt={5} >
                <Box sx={{ backgroundColor: "#81311A", p: 2, borderRadius: '10px', textAlign: 'center', width: 700, mb: 5}}>
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: "bold", mb: 3, mt: 2 }}>Subscribe</Typography>
                    <Typography variant="body2" sx={{ color: 'white', marginBottom: '10px' }}>Get weekly updates on the latest blogs via newsletters right in your mailbox.</Typography>
                    <Grid container alignItems={"center"} mb={2} justifyContent={"center"}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                placeholder="Full Name"
                                type="text"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px', // Adjust the height as needed
                                        borderRadius: '10px',
                                        border: "1px solid",
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            border:"1px solid"
                                        }
                                    },
                                    backgroundColor: 'white',
                                    width: 200,
                                    mt: '20px',
                                    borderRadius: '10px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                placeholder="Email Address"
                                type="email"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px', // Adjust the height as needed
                                        borderRadius: '10px',
                                        border: "1px solid",
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            border:"1px solid"
                                        }
                                    },
                                    backgroundColor: 'white',
                                    width: 200,
                                    mt: '20px',
                                    borderRadius: '10px',

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    width: '50%',
                                    mt: 2,
                                    '&:hover': {
                                        backgroundColor: 'black',
                                        border:"1px solid"
                                    }
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

        </div>
    )
}

export default SubscribeModelBox
