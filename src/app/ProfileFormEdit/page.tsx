"use client"
import * as React from 'react';
import { Box, Typography, TextField, Button, Avatar, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';

export default function ProfileFormEdit() {

    const matches = useMediaQuery("(min-width:600px)")

    const router = useRouter();

    const handleclicksave = () => {
        router.push('/home')
    }

    const handleclickback = () => {
        router.push('/ProfileForm')
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
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: "flex",
                        mb: 2
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
                            color: "White",
                            borderRadius: "12px",
                            width: "100px",
                            height: "40px",
                            border: "1px solid black ",
                            fontWeight: "bold",
                            '&:hover': {
                                backgroundColor: "#81311a",
                                border: "3px solid black"
                            }
                        }}>
                        LogOut
                    </Button>
                </Box>
                <Typography variant="h5" mt={!matches ? "100px" : "60px"}>
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
                            src="/ProfileDp.png" alt="Profile Image"
                        />
                    </Box>
                    <Typography variant="body2"
                        sx={{
                            color: 'black',
                            marginBottom: 4,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>
                        Update image
                    </Typography>
                </Box>
                <form >
                    <Box
                        sx={{
                            backgroundColor: "#81311a",
                            padding: 8,
                            mt: "10px",
                            borderRadius: "6px"
                        }}>
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
                            InputProps={{
                                endAdornment: (
                                    <IconButton edge="end"
                                        sx={{
                                            border: "black"
                                        }}>
                                        <EditIcon />
                                    </IconButton>)
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
                            InputProps={{
                                endAdornment: (
                                    <IconButton edge="end"
                                        sx={{
                                            border: "black"
                                        }}>
                                        <EditIcon />
                                    </IconButton>)
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Mobile Number"
                            variant="outlined"
                            margin="normal"
                            type="text"
                            required
                            multiline
                            rows={2}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "6px"
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton edge="end" sx={{
                                        border: "black"
                                    }}>
                                        <EditIcon />
                                    </IconButton>)
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                            <Button
                                onClick={handleclicksave}
                                sx={{
                                    color: "black",
                                    border: "1px solid black",
                                    padding: 1,
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                    fontWeight: "bold",
                                    width: "100px",
                                    mt: 5,
                                    '&:hover': {
                                        backgroundColor: "white",
                                        border: "3px solid black"
                                    }
                                }}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
