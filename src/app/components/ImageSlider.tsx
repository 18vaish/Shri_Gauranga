import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { Button, useMediaQuery } from '@mui/material';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const images = [
    {
        label: '',
        imgPath: '/krishna.jpg',
    },
    {
        label: '',
        imgPath: '/radha krishna.jpg',
    },
    {
        label: '',
        imgPath: '/shree radha logo.jpg',
    },
    {
        label: '',
        imgPath: '/radha krishna.jpg',
    },
    {
        label: '',
        imgPath: '/radha krishna.jpg',
    },
    {
        label: '',
        imgPath: '/radha krishna.jpg',
    },
];

function ImageSlider() {

    const matches = useMediaQuery("(min-width:600px)");

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [activeStep]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <Box sx={{ backgroundColor: "#FEFCEA" }}>
            <Box sx={{ justifyContent: "center", width: '70%', marginLeft: "14%" }}>
                <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: '#FEFCEA',
                        }}
                    />
                    <Box
                        component="img"
                        loading="lazy"
                        sx={{
                            height: 355,
                            display: 'block',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            width: '100%',
                            borderRadius: 5,
                        }}
                        src={images[activeStep]?.imgPath}
                        alt={images[activeStep]?.label}
                    />
                    <MobileStepper
                        variant="dots"
                        steps={6}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#FEFCEA",
                            '& .MuiMobileStepper-dots': {
                                marginTop: '25px',
                                gap: 8

                            },
                            '& .MuiMobileStepper-dot': {
                                width: '30px',
                                height: '30px',
                                border: "1px solid Black"
                            },
                            '& .MuiMobileStepper-dotActive': {
                                backgroundColor: '#562000',
                            },
                        }}
                        backButton={
                            <Box>
                                <button onClick={handleBack} disabled={activeStep === 0}>
                                </button>
                            </Box>
                        }
                        nextButton={
                            <Box>
                                <button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                </button>
                            </Box>
                        }
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default ImageSlider;
