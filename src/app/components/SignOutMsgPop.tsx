"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function SignOutMsg() {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={false}
                onClose={handleClose}
                PaperProps={{
                    sx: { borderRadius: 2, border: "1px solid black" }
                }}
            >
                <Box sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <DialogTitle variant='h6' sx={{ fontWeight: "bold", color: "black" }}>
                            Do you want to sign out ?
                        </DialogTitle>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 5, mt: 5, mb: 3 }}>
                        <Button size="small" variant="contained" onClick={handleClose} sx={{ color: "white", backgroundColor: "#81311A" }}> Yes</Button>
                        <Button size="small" variant="contained" onClick={handleClose} sx={{ color: "black", backgroundColor: "#AEAEAE" }}>No</Button>
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}

function setOpen(arg0: boolean) {
    throw new Error('Function not implemented.');
}
