"use client"
import * as React from 'react';
import { Box, Typography, Link, IconButton, Divider, useMediaQuery, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';

function Footer() {

    const imageWidth = window.innerWidth;
    const matches = useMediaQuery("(min-width:600px)");

    return (
        <Box bgcolor={"#fcdfa0"} mt={1}>
            {/* Image */}
            <Box mb={2} display={"flex"}  >
                <Image src="/banner-3 1.png" width={imageWidth} height={75} alt="Banner Image" />
            </Box>
            <Box display="flex" justifyContent={"space-between"} alignItems={"flex-start"} flexWrap={"wrap"} p={2}>
                {/* Links Left */}
                <Box >
                    <Box display={"flex"} justifyContent={"center"}>
                        <Typography variant="h5" mb={1}><b>Links</b></Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} flexDirection={!matches ? "column" : "row"} gap={5}>
                        <Box display={"flex"} flexDirection={"column"} >
                            <Box mb={3}>
                                <Typography variant={"body2"} mb={1} fontWeight={"bold"} marginBottom={1}>Gosai Talks Youtube Channel</Typography>
                                <Link href="#" color={"#515151"} variant={"body2"} sx={{ textDecoration: "none" }}>https://www.rupangambhajanram.com</Link>
                            </Box>
                            <Box mb={3}>
                                <Typography variant={"body2"} fontWeight={"bold"} mb={1}>Gosai Talks Youtube Channel</Typography>
                                <Link href="#" color={"#515151"} variant={"body2"} sx={{ textDecoration: "none" }}>https://www.rupangambhajanram.com</Link>
                            </Box>
                            <Box mb={3}>
                                <Typography variant={"body2"} fontWeight={"bold"} mb={1}>Gosai Talks Youtube Channel</Typography>
                                <Link href="#" color={"#515151"} variant={"body2"} sx={{ textDecoration: "none" }}>https://www.rupangambhajanram.com</Link>
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"}>
                            <Box mb={3}>
                                <Typography variant={"body2"} fontWeight={"bold"} mb={1}>Gosai Talks Youtube Channel</Typography>
                                <Link href="#" color={"#515151"} variant={"body2"} sx={{ textDecoration: "none" }}>https://www.rupangambhajanram.com</Link>
                            </Box>
                            <Box mb={3}>
                                <Typography variant={"body2"} fontWeight={"bold"} mb={1}>Gosai Talks Youtube Channel</Typography>
                                <Link href="#" color={"#515151"} variant={"body2"} sx={{ textDecoration: "none" }}>https://www.rupangambhajanram.com</Link>
                            </Box>
                            <Box mb={3}>
                                <Typography variant={"body2"} fontWeight={"bold"} mb={1}>Gosai Talks Youtube Channel</Typography>
                                <Link href="#" color={"#515151"} variant={"body2"} sx={{ textDecoration: "none" }}>https://www.rupangambhajanram.com</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", color: "black", height: "250px", gap: 2 }}>
                    <Divider sx={{ mb: "50px", backgroundColor: 'black' }} orientation="vertical" flexItem />
                    <Divider sx={{ mt: "50px", backgroundColor: 'black' }} orientation="vertical" flexItem />
                </Box>
                {/* Subscribe */}
                <Box gap={3} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant={"h5"} fontWeight={"bold"}>Subscribe</Typography>
                    <Box display={"flex"}>
                        <Typography variant={"subtitle2"} style={{ marginLeft: "30px" }}>
                            Join 1.2 Million people<br />
                            from around the world,<br />
                            get wisdom articles<br />
                            delivered in the<br />
                            mailbox for free.
                        </Typography>
                    </Box>
                    <Button sx={{ backgroundColor: "#81311a", color: "white", padding: 1, borderRadius: "12px", border: "1px solid black", fontWeight: "bold" }}>Subscribe now</Button>
                </Box>
                {/* Contact Us */}
                <Box mb={4} minWidth={200}>
                    <Typography variant={"h5"} mb={1} fontWeight={"bold"}>Contact Us</Typography>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Box mb={1} display={"flex"} alignItems={"center"}>
                            <LocationOnIcon fontSize={"small"} sx={{ marginRight: '4px', mb: "80px", marginTop: '2px' }} />
                            <Typography variant={"body2"}>India<br />Rupanuga Bhajan Ashram,<br /> Gau Ghat,Madan Mohan Ghera,<br /> Parikrama Marg, Vrindavan,<br /> UP, 281121</Typography>
                        </Box>
                        <Box mb={1} display={"flex"} alignItems={"center"}>
                            <PhoneIcon fontSize={"small"} sx={{ marginRight: '4px' }} />
                            <Typography variant={"body2"} ><Link href="tel:+918868817098" color={"#272319"} sx={{ textDecoration: "none" }} >+91 8868817098</Link></Typography>
                        </Box>
                        <Box mb={1} display={"flex"} alignItems={"center"}>
                            <EmailIcon fontSize={"small"} sx={{ marginRight: '4px' }} />
                            <Typography variant={"body2"}><Link href="mailto:gauragopala@gmail.com" color={"#272319"} sx={{ textDecoration: "none" }}>gauragopala@gmail.com</Link></Typography>
                        </Box>
                    </Box>
                </Box>
                {/* Connect With Us */}

                <Box mb={4} minWidth={200} display={"flex"} flexDirection={"column"} alignItems={"center"} mr={5}>
                    <Typography variant="h5" mb={1} fontWeight={"bold"}>Connect With Us</Typography>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <IconButton href="#" >
                            <FacebookIcon style={{ color: '#3b5998' }} />
                        </IconButton>
                        <IconButton href="#" >
                            <TwitterIcon style={{ color: '#00acee' }} />
                        </IconButton>
                        <IconButton href="#" >
                            <InstagramIcon style={{ color: '#833ab4' }} />
                        </IconButton>
                        <IconButton href="#" >
                            <YouTubeIcon style={{ fill: '#FF0000' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;



