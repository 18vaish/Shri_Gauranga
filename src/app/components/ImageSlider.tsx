"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const images = [
    {
        label: '',
        imgPath:
            '/krishna.jpg',
    },
    {
        label: '',
        imgPath:
            '/radha krishna.jpg',
    },
    {
        label: '',
        imgPath:
            '/shree radha logo.jpg',
    },
    {
        label: '',
        imgPath:
            '/radha krishna.jpg',
    },
];

function ImageSlider() {
    const theme = useTheme();
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
                            height: 100,
                            pl: 2,
                            bgcolor: '#FEFCEA',
                        }}
                    >
                        {/* <Typography>{images[activeStep].label}</Typography> */}
                    </Paper>
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
                        src={images[activeStep]?.imgPath} // Add optional chaining to handle cases where images[activeStep] is undefined
                        alt={images[activeStep]?.label} // Add optional chaining to handle cases where images[activeStep] is undefined
                    />
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{ display: "flex", justifyContent: "center", backgroundColor: "#FEFCEA" }}
                        backButton={
                            <Box>
                                <button onClick={handleBack} disabled={activeStep === 0}>
                                    <SkipPreviousIcon/>
                                </button>
                            </Box>
                        }
                        nextButton={
                            <Box>
                                <button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                <SkipNextIcon/>
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
