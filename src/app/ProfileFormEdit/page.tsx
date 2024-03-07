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
        <Box maxWidth={600} mx="auto" p={6} textAlign="center"
            sx={{
                backgroundColor: "#FEFCEA",
                mb: "100",
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
                            backgroundColor: "#81311a"
                        }
                    }}>
                    LogOut
                </Button>
            </Box>
            <Typography variant="h5" mt={!matches ? "100px" : "100px"}>
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
                        src="/logo.png" alt="Profile Image"
                    />
                </Box>
                <Typography variant="body2"
                    sx={{
                        color: 'black',
                        marginBottom: 1
                    }}>
                    Update Image
                </Typography>
            </Box>
            <form >
                <Box
                    sx={{
                        backgroundColor: "#81311a",
                        padding: 2,
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
                        <Button
                            sx={{
                                color: "white"
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
                                mt: 3,
                                '&:hover': {
                                    backgroundColor: "white"
                                }
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}
