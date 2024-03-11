"use client"
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import SearchDropdown from "../components/SearchDropdown";

function SubscriptionPage() {

    const router = useRouter();

    const handleclicksubscform = () => {
        router.push('/SubscriptionToNewsletter')
    }

    return (
        <Box sx={{ padding: 1 }} bgcolor={"#FEFCEA"}>
            <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Typography variant='h6' p={2} sx={{ fontSize: "small" }}>
                    <b>Home /</b>Subscription
                </Typography>
                <Box p={2}>
                    <SearchDropdown />
                </Box>
            </Box>
            <Box bgcolor={"#FEFCEA"} p={2}>
                <Typography variant="h4" mt={5} mb={5} display={"flex"} fontFamily={"cursive"} justifyContent={"center"} alignItems={"center"}>Subscription</Typography>
                <Box display={"flex"} gap={5} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap-reverse"}>
                    <Box color={"#81311A"} mb={"5%"} display={"flex"} gap={2} fontFamily={"cursive"} flexDirection={"column"}>
                        <Box>
                            <p> Lorem ipsum dolor sit amet consectetur<br />
                                adipisicing elit. Rem repellendus sapiente<br />
                                fuga cum, nemo labore, deleniti temporibus<br />
                                officiis laborum vero, laudantium ea<br />
                                obcaecati saepe deserunt voluptates mollitia<br />
                            </p>
                        </Box>
                        <Box>
                            <p>
                                fugiat consequuntur nulla laboriosam unde<br />
                                minima sint incidunt perspiciatis<br />
                                voluptate? Neque commodi quia, magnam<br />
                                tempore quaerat illo quam illum aperiam<br />
                                veniam doloribus sunt?
                            </p>
                        </Box>
                        <Box>
                            <p>
                                fugiat consequuntur nulla laboriosam unde<br />
                                minima sint incidunt perspiciatis<br />
                                voluptate? Neque commodi quia, magnam<br />
                                tempore quaerat illo quam illum aperiam<br />
                                veniam doloribus sunt?
                            </p>
                        </Box>

                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Button variant="outlined"
                            onClick={handleclicksubscform}
                                sx={{
                                    border: "1px solid black",
                                    color: "white",
                                    backgroundColor: "#81311A",
                                    p: 1, mt: 2,
                                    borderRadius: 3,
                                    width: "250px",
                                    fontWeight: "bold",
                                    '&:hover': {
                                        backgroundColor: "#81311A",
                                        border: "2px solid black"
                                    }
                                }}>
                                Subscribe now
                            </Button>
                        </Box>
                    </Box>
                    <Box display={"flex"} height={450} width={350} mb={5} bgcolor={"grey"} border={"1px solid"}>
                        {/* <Divider sx={{mt:"50px"}} orientation="vertical" flexItem /> */} {/* this is for cross lines */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SubscriptionPage;