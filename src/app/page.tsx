"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export default function UpgradeToNXTpage() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    const matches = useMediaQuery("(min-width:600px)")

    return (
        <Box>
            <React.Fragment>
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open responsive dialog
                </Button> */}
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <Box >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center",
                            borderRadius: 4,
                            textAlign: 'center',
                            flexWrap: "wrap",
                            flexDirection: matches ? 'row' : 'column-reverse',
                        }}>
                            <Box sx={{
                                display: "flex",
                                width: 280,
                                height: 600,
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <Box>
                                    <Typography variant='h6'
                                        sx={{ mt: 5, textAlign: 'center' }}
                                    >
                                        <b>Upgrade to next Level</b>
                                    </Typography>
                                </Box>
                                <Typography sx={{ mt: 4 }} >
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry. <br />
                                </Typography>
                                <Typography sx={{ mt: 2 }} >
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry.<br />
                                    and typesetting industry. <br />
                                </Typography>
                                <Box >
                                    <Button variant="outlined"
                                        sx={{
                                            backgroundColor: "#81311A",
                                            color: "white",
                                            mt: 10,
                                            p: "6px 70px",
                                            width: '50%',
                                            justifyContent: "center"
                                        }}
                                    >
                                        Upgrade
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: 280,
                                height: 600,
                                display: 'flex',
                                backgroundColor: "gray",
                                alignItems: "center",
                                justifyContent: 'center',
                                borderRadius: "1px solid black",
                            }}
                            >
                                {/* <img
                                    src="data:image/jpeg;base64,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" alt="Image description" /> */}
                            </Box>
                        </Box>
                    </Box>
                </Dialog>
            </React.Fragment>
        </Box>

    );
}