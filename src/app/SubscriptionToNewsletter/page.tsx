"use client"
import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import SearchDropdown from "../components/SearchDropdown";

function SubToNews() {
    return (
        <Box bgcolor={"#FEFCEA"}>
            <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                    <b>Home /</b> Subscription
                </Typography>
                <Box p={2}>
                    <SearchDropdown />
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 5, p: 1 }}>
                <Box>
                    <Typography variant="h4">
                        Which emails you would like to recieve?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 5 }}>
                        <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>      <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>      <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>      <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>      <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <FormControlLabel control={<Checkbox />} label="" />
                            <p><b>Simply dummy text of the printing</b> and<br />
                                typesetting industry. Lorem</p>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb:5 }}>
                            <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mt: 2, borderRadius: 3, width: "250px", fontWeight:"bold"}}>Subscribe to newsletter</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SubToNews;