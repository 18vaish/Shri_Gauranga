"use client"
import { Box, Button, TextField } from "@mui/material";

function Reset_pass() {
    return (
        <Box sx={{ display: "flex", width: "100%", height: "100vh", backgroundColor: "#FEFCEA" }}>
            <Box sx={{ display: "flex", width: "100%", height: "5vh", backgroundColor: "#81311A", justifyContent: "center" }}>
                <Box sx={{ display: "flex", width: "500px", height: "500px", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ mt: 15, fontWeight:"bold"}}>
                            <h2>&nbsp;&nbsp;&nbsp;Reseat Your Password</h2>
                            <h4 style={{ color: "#686760",  marginTop: 20, marginBottom:20}}>Don't worry! It occurs. Please enter the <br />
                                email address linked with your account</h4>
                        </Box>
                        <Box>
                            <TextField id="outlined-basic" label="Email" type="email" variant="outlined" size="small" sx={{ border: "3px solid", mt: 1, mb: 5, borderRadius: 3, width: "300px" }} /><br />
                            <Button variant="outlined" sx={{ border: "3px solid", color: "black", p: 1, mb: 5, borderRadius: 3, width: "310px", fontWeight:"bold"}}>Send Code</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Reset_pass;