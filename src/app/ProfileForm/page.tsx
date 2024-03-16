"use client"
import * as React from 'react';
import { Box, Typography, TextField, Button, Avatar, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';


export default function ProfileForm() {

    const matches = useMediaQuery("(min-width:600px)")

    const router = useRouter();

    const handleclickedit = () => {
        router.push('/ProfileFormEdit')
    }

    const handleclickback = () => {
        router.push('/home')
    }

    const handleclicklogout = () => {
        router.push('/LogIn')
    }

    return (
        <Box sx={{ backgroundColor: "#FEFCEA", }}>
            <Box maxWidth={1200} mx="auto" p={6} textAlign="center"
                sx={{
                    backgroundColor: "#FEFCEA",
                    borderRadius: "6px"
                }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                    <IconButton
                        onClick={handleclickback}
                        sx={{
                            color: "black",
                        }}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Button
                        onClick={handleclicklogout}
                        sx={{
                            padding: 1,
                            backgroundColor: "#81311a",
                            color: "white",
                            width: "100px",
                            height: "40px",
                            border: "1px solid black ",
                            fontWeight: "bold",
                            '&:hover': {
                                backgroundColor: "#81311a",
                                border: "3px solid black"
                            }
                        }}>
                        Logout
                    </Button>
                </Box>
                <Typography variant="h5" mt={!matches ? "100px" : "60px"} >
                    <b>My Profile</b>
                </Typography>
                <Box mb={3}
                    sx={{
                        borderColor: "black"
                    }}>
                    <Box
                        sx={{
                            border: "1px solid black",
                            display: 'inline-block',
                            borderRadius: '50%'
                        }}>
                        <Avatar
                            sx={{
                                width: 100,
                                height: 100,
                                mx: "auto",
                            }}
                            src="/ProfileDp.png" alt="Profile Image" />
                    </Box>
                    <Typography variant="body2"
                        sx={{
                            color: 'black',
                            marginBottom: 4,
                            fontSize:20,
                            fontWeight: 'bold'
                        }}>
                        Update Image
                    </Typography>

                </Box>
                <form >
                    <Box
                        sx={{
                            backgroundColor: "#81311a",
                            padding: 8,
                            mt: "10px",
                            borderRadius: "6px"
                        }} >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <Typography fontSize={15}
                                sx={{
                                    color: "white"
                                }}>
                                <b>Personal Details</b>
                            </Typography >
                            <Button
                                onClick={handleclickedit}
                                sx={{
                                    color: "white",
                                    "&:hover" :{
                                        border:"1px solid"
                                    }
                                }}>
                                Edit
                            </Button>
                        </Box>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            multiline
                            rows={2}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "6px"
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            type="email"
                            required
                            multiline
                            rows={2}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "6px"
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Mobile Number"
                            variant="outlined"
                            margin="normal"
                            type="tel"
                            required
                            multiline
                            rows={2}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "6px"
                            }}
                        />
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
