"use client"
import { Box, Button, Divider, TextField, Typography } from "@mui/material";

function DonationPage() {
    return (
        <Box sx={{ padding: 1, mb:5}}>
            <Typography variant="h4" sx={{ display: "flex", mb: "3%", mt: "10%", justifyContent: "center", alignItems: "center" }}>Donation</Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ mb: "5%" }}>
                    <p> Lorem ipsum dolor sit amet consectetur<br />
                        adipisicing elit. Rem repellendus sapiente<br />
                        fuga cum, nemo labore, deleniti temporibus<br />
                        officiis laborum vero, laudantium ea<br />
                        obcaecati saepe deserunt voluptates mollitia<br />
                        Lorem ipsum dolor sit amet consectetur<br />
                        adipisicing elit. Rem repellendus sapiente<br />
                        fuga cum, nemo labore, deleniti temporibus<br />
                    </p>
                    <p>
                        fugiat consequuntur nulla laboriosam unde<br />
                        minima sint incidunt perspiciatis<br />
                        voluptate? Neque commodi quia, magnam<br />
                        tempore quaerat illo quam illum aperiam<br />
                        veniam doloribus sunt?
                    </p>
                    <p>
                        fugiat consequuntur nulla laboriosam unde<br />
                        minima sint incidunt perspiciatis<br />
                        voluptate? Neque commodi quia, magnam<br />
                        tempore quaerat illo quam illum aperiam<br />
                        veniam doloribus sunt?
                    </p>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mt: 2, borderRadius: 3, width: "250px", fontWeight:"bold" }}>Subscribe now</Button>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "500px", width: "25%", backgroundColor: "grey", border: "1px solid" }}>
                    {/* <Divider sx={{mt:"50px"}} orientation="vertical" flexItem /> */} {/* this is for cross lines */}
                </Box>
            </Box>
        </Box>
    );
}

export default DonationPage;