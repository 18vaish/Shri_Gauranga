"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Divider, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const SearchDropdown = () => {
    const router = useRouter();

    const matches = useMediaQuery("(min-width:600px)");

    const handleclickarticlecards = () => {
        router.push('/ArticleCardsPage')
    }

    const handleclickbookcards = () => {
        router.push('/BookCardsPage')
    }

    const handleclickbookletscards = () => {
        router.push('/BookletCardsPage')
    }


    return (
        <FormControl
            sx={{
                width: 250, // Full width on small screens
                backgroundColor: 'white',
                borderRadius: '15px',
                '@media (min-width:600px)': { // Adjust styles for screens wider than 600px
                }
            }}
        >
            <InputLabel
                id="sort-by"
                sx={{
                    transform: 'translateY(50%)',
                    fontSize: '0.90rem',
                    pl: 2
                }}
            >
                Search
            </InputLabel>
            <Select
                labelId="sort-by"
                id="sort-by"
                label="Sort By"
                sx={{
                    height: '38px',
                    borderRadius: '15px'
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: '15px',
                            backgroundColor: '#FCDFA0',
                            border: '2px solid black'
                        }
                    }
                }}
            >
                <MenuItem value={10}
                    onClick={handleclickarticlecards}
                >
                    Articles<br />
                    Who is RadhaKrishna?
                </MenuItem>
                <Divider sx={{ border: '1px solid black' }} />
                <MenuItem value={20}
                    onClick={handleclickbookcards}
                >
                    Book<br />
                    RadhaKrishna-Eternal love
                </MenuItem>
                <Divider sx={{ border: '1px solid black' }} />
                <MenuItem value={30}
                    onClick={handleclickbookletscards}
                >
                    Booklets<br />
                    RadhaKrishna-Eternal love<br />
                    RadhaKrishna-Eternal love
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default SearchDropdown;
