"use client"
import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Typography, Box, IconButton, InputAdornment, Grid, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = () => {
    const [searchText, setSearchText] = useState('');

    // const isMobile = useMediaQuery('(max-width:600px)'); 
    const matches = useMediaQuery("(min-width:600px)");



    const handleChange = (setter:any) => (event:any) => {
        setter(event.target.value);
    };

    return (
        <div>
            <Box display= {"flex"} justifyContent= {"center"}>
                <Box sx={{ mt: 5, mb: 5, gap: 20, width: 1200 }}>
                    <Grid container flexDirection={!matches ? "column" : "row"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                        <Grid item xs={12} md={4} lg={2}>
                            <TextField
                                label="Search"
                                value={searchText}
                                onChange={handleChange(setSearchText)}
                                style={{ marginBottom: '10px', border: '2px solid grey', borderRadius: "10px", width: '100%', backgroundColor: 'white' }}
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                            <Box sx={{ pl: 2, pt: 2 }}>
                                <Typography>Sort by</Typography>
                            </Box>
                            <Grid item xs={12} md={4} lg={2} justifyContent={"flex-start"}>
                                <FormControl sx={{ width: 200, backgroundColor: 'white', borderRadius: '15px', justifyContent: 'flex-start' }}>
                                    <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2, width: '260%' }}>Sort by</InputLabel>
                                    <Select
                                        labelId="sort-by"
                                        id="sort-by"
                                        label="Sort By"
                                        onChange={handleChange}
                                        sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                                    >
                                        <MenuItem>Ten</MenuItem>
                                        <MenuItem>Twenty</MenuItem>
                                        <MenuItem>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        <Box sx={{ pl: 2, pt: 2 }}>
                            <Typography>Filters</Typography>
                        </Box>
                        <Grid item xs={12} md={4} lg={2} justifyContent={"center"} alignItems={'center'}>

                            <FormControl sx={{ width: 200, backgroundColor: 'white', borderRadius: '15px' }}>
                                <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Departments</InputLabel>
                                <Select
                                    labelId="sort-by"
                                    id="sort-by"
                                    label="Sort By"
                                    onChange={handleChange}
                                    sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                                >
                                    <MenuItem>Ten</MenuItem>
                                    <MenuItem>Twenty</MenuItem>
                                    <MenuItem>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4} lg={2}>
                            <FormControl sx={{ width: 200, borderRadius: '15px', backgroundColor: 'white' }}>
                                <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Categories</InputLabel>
                                <Select
                                    labelId="sort-by"
                                    id="sort-by"
                                    label="Sort By"
                                    onChange={handleChange}
                                    sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                                >
                                    <MenuItem>Ten</MenuItem>
                                    <MenuItem>Twenty</MenuItem>
                                    <MenuItem>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4} lg={2}>
                            <FormControl sx={{ width: 200, borderRadius: '15px', backgroundColor: 'white' }}>
                                <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Scriptures</InputLabel>
                                <Select
                                    labelId="sort-by"
                                    id="sort-by"
                                    label="Sort By"
                                    onChange={handleChange}
                                    sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                                >
                                    <MenuItem>Ten</MenuItem>
                                    <MenuItem>Twenty</MenuItem>
                                    <MenuItem>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default FilterBar;


