"use client"
import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";

function ResetPass() {
    return (
        <Box sx={{ display: "flex", width: "100%", height: "100vh", backgroundColor: "#FEFCEA" }}>
            <Box sx={{ display: "flex", width: "100%", height: "5vh", backgroundColor: "#81311A", justifyContent: "center" }}>
                <Box sx={{ display: "flex", width: "500px", height: "500px", alignItems: "center", mt: "5%", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ mt: 5 }}>
                            <Typography variant="h2" fontWeight="bold">Reseat Your Password</Typography>
                            <Typography variant="h4" style={{ color: "#686760", marginTop: 2, marginBottom: 2 }}>Do not worry! It occurs. Please enter the <br />
                                email address linked with your account</Typography>
                        </Box>
                        <Box>
                            <TextField label="Email" type="email" variant="outlined" size="small" sx={{ border: "3px solid", mt: 1, mb: 2, borderRadius: 3, width: "350px" }} /><br />
                            <Button variant="outlined" sx={{ border: "3px solid", color: "black", p: 1, mb: 2, borderRadius: 3, width: "360px", fontWeight: "bold" }}>Send Code</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ResetPass;
