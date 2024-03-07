"use client"
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Divider, Box, useMediaQuery, Button } from '@mui/material';
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
        <div>
            <FormControl
                sx={{
                    width: 250, // Full width on small screens
                    // maxWidth: '254px', // Limit width on larger screens
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
                        height: "38px",
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
                    <MenuItem value={10}>
                        <Button onClick={handleclickarticlecards} fullWidth>Articles<br />Who is RadhaKrishna?</Button>
                    </MenuItem>
                    <Divider sx={{ border: '1px solid black' }} />
                    <MenuItem value={20}>
                        <Button onClick={handleclickbookcards} fullWidth>Book<br />RadhaKrishna-Eternal love</Button>
                    </MenuItem>
                    <Divider sx={{ border: '1px solid black' }} />
                    <MenuItem value={30}>
                        <Button onClick={handleclickbookletscards} fullWidth>Booklets<br />RadhaKrishna-Eternal love<br />RadhaKrishna-Eternal love</Button>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SearchDropdown;
