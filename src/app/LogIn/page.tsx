"use client"
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

function Login() {

    const router = useRouter();

    const handleclicklogin = () => {
        router.push('/CreateAccount')
    }

    return (
        <Box sx={{ display: "flex", width: "100%", height: "100vh", backgroundColor: "#FEFCEA" }}>
            <Box sx={{ display: "flex", width: "100%", height: "5vh", backgroundColor: "#81311A", justifyContent: "center" }}>
                <Box sx={{ display: "flex", width: "500px", height: "500px", alignItems: "center", mt: "10%", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Box>
                            <h2><b>Welcome to Gauranga <br />
                                Samaj Community</b></h2>
                        </Box>
                        <Box>
                            <TextField id="outlined-basic" label="Email" type="email" variant="outlined" size="small" sx={{ border: "3px solid", mt: 5, mb: 5, borderRadius: 3, width: "350px" }} /><br />
                            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" size="small" sx={{ border: "3px solid", mb: 5, borderRadius: 3, width: "350px" }} /><br />
                            <Button variant="outlined"
                                onClick={handleclicklogin}
                                sx={{ border: "3px solid", color: "black", p: 1, mb: 5, borderRadius: 3, width: "360px", fontWeight:"bold"}}>Log in</Button>
                        </Box>
                        <Box>
                            <FormControlLabel control={<Checkbox />} label="Remember me for 30 days" />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <a href="#">
                                <u>
                                    Forgot Password?
                                </u>
                            </a>
                        </Box>
                        <Box sx={{ color: "#686760" }}>
                            <h5>
                                You do not have account yet?  <a href="#"
                                    style={{ color: "black", textDecoration: "none" }}><b>Sign In</b></a>
                            </h5>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;