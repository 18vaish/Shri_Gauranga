"use client"
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, Button, Menu, MenuItem, MenuList, Avatar, useMediaQuery, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import LoginDropdown from './LoginDropdown';
import { VolunteerActivism } from '@mui/icons-material';

const Navbar = () => {
    const matches = useMediaQuery("(min-width:600px)");
    const [isAdditionalNavbarOpen, setIsAdditionalNavbarOpen] = useState(false);
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('English');

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
        setMenuOpen(true);
        setIsAdditionalNavbarOpen(true);
    };

    const handleEnglishMenuClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter();


    const links = [
        { label: 'Subscription', path: '/Subscription' },
        { label: 'Donation', path: '/Donation' },
    ];


    const navigationButtons = [
        { label: 'Home', path: '/' },
        { label: 'Articles', path: '/ArticleHomePage' },
        { label: 'Book', path: '/BookHomePage' },
        { label: 'Booklet', path: '/BookletHomePage' },
        { label: 'Calendar', path: '/Calendar' },
        { label: 'About us', path: '/AboutUs' },
        { label: 'Support', path: '/Support' }

    ];
    const handleNavigation = (path: string) => {
        router.push(path);
    };
    return (
        <div>
            <AppBar position="relative">
                <Toolbar variant="dense" sx={{ justifyContent: 'space-between', backgroundColor: '#562000' }}>
                    {matches ? (

                        <Typography variant="subtitle2" color="lightgray" fontSize="small">
                            Shri Gauranga Samaj
                        </Typography>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            {menuOpen ? (
                                <Typography variant="subtitle2" color="lightgray" fontSize="small" sx={{ display: 'flex', marginLeft: '5px' }}>
                                    <LoginDropdown />
                                    <Button variant="text" color="inherit" onClick={handleEnglishMenuClose} sx={{ textTransform: 'capitalize', paddingLeft: '80px', paddingTop: '10px' }}>
                                        {language}
                                        <ExpandMoreIcon />
                                    </Button>
                                </Typography>
                            ) : (
                                <Avatar src="/logo.png" sx={{ width: '40px', height: '40px' }} />
                            )}
                        </Box>
                    )}
                    {/* Menu Icon */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="end" // Align toggle to the right side
                            color="inherit"
                            aria-label="menu"
                            onClick={openMenu} // Define openMenu function
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    {/* Right side buttons */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        {links.map((item, index) => (
                            <Button key={index} variant="text" onClick={() => router.push(item.path)} color="inherit" sx={{ textTransform: 'capitalize' }}>

                                {item.label === 'Subscription' && <EmailOutlinedIcon />}
                                {item.label === 'Donation' && <VolunteerActivism sx={{ paddingBottom: '5px' }} />}
                                {item.label}
                            </Button>
                        ))}
                        <Button variant="text" color="inherit" onClick={(event) => setAnchorEl(event.currentTarget)} sx={{ textTransform: 'capitalize' }}>
                            {language}
                            <ExpandMoreIcon />
                        </Button>
                        {matches && <LoginDropdown />}
                    </Box>


                    {/* Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleEnglishMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem sx={{ color: "black" }} >French</MenuItem>
                        <Divider sx={{ border: '0.5px solid black', }} />
                        <MenuItem sx={{ color: "black" }}>Russian</MenuItem>

                    </Menu>

                </Toolbar>
            </AppBar>

            {matches && (
                <AppBar position="relative">
                    <Toolbar
                        sx={{
                            backgroundColor: '#81311A',
                            minHeight: 95,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            overflowX: 'auto',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src="/logo.png" sx={{ width: '70px', height: '70px', marginRight: '10px' }} />

                        </Box>
                        <Box
                            sx={{
                                display: 'grid',
                                gridAutoFlow: 'column',
                                gap: 5.5,
                                p: 3,
                                overflowX: 'auto',
                                maxWidth: '100%',
                                justifyContent: 'flex-start',
                                '@media (min-width: 600px)': {
                                    justifyContent: 'center',
                                    width: '100%',
                                },
                            }}
                        >
                            {navigationButtons.map((button, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleNavigation(button.path)}
                                    variant="text"
                                    color="inherit"
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderRadius: '10px',
                                        padding: '4px 8px',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: '#F0F2F2',
                                            color: '#131921',
                                        },
                                        '@media (max-width:600px)': {
                                            fontSize: '0.6rem',
                                        },
                                    }}
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            )}


            {isAdditionalNavbarOpen && (
                <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#562000' }}>
                    <Toolbar
                        sx={{
                            minHeight: 60,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflowX: 'auto',
                        }}
                    >


                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            {menuOpen ? (
                                <>
                                    <Typography variant="subtitle2" color="lightgray" fontSize="small" sx={{ paddingBottom: '2px', marginRight: '5px' }}>
                                        Shri Gauranga Samaj
                                    </Typography>
                                    <Button variant="text" color="inherit" sx={{ textTransform: 'capitalize' }}>
                                        <EmailOutlinedIcon />
                                        subscribe
                                    </Button>
                                    <Button variant="text" color="inherit" sx={{ textTransform: 'capitalize' }}>
                                        <VolunteerActivism sx={{ paddingBottom: '5px' }} />
                                        Donation
                                    </Button>
                                </>
                            ) : (
                                <Avatar src="/logo.png" sx={{ width: '40px', height: '40px' }} />
                            )}
                        </Box>

                    </Toolbar>
                </AppBar>
            )}
        </div>
    );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });