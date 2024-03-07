"use client"
import { AppBar, Toolbar, IconButton, Box, Typography, Button, Menu, MenuItem, MenuList, useTheme, Avatar, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import { AttachMoney as DonateIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Import from next/router instead of next/navigation
import LoginDropdown from './LoginDropdown';
import dynamic from "next/dynamic";

const Navbar = () => {
    const matches = useMediaQuery("(min-width:600px)");
    const router = useRouter();
    
    const handleclickdonation = () => {
        router.push('/Donation');
    };

    const handleclicksubscription = () => {
        router.push('/Subscription');
    };
    
    const handleclickhome = () => {
        router.push('/home');
    };

    const handleclickarticlehomepage = () => {
        router.push('/ArticleHomePage');
    };

    const handleclickbookhomepage = () => {
        router.push('/BookHomePage');
    };

    const handleclickbooklethomepage = () => {
        router.push('/BookletHomePage');
    };

    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorNav(null);
    };

    const handleEnglishMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleEnglishMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="relative">
                <Toolbar variant="dense" sx={{ justifyContent: 'space-between', backgroundColor: '#562000', height: '5px' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={openMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            alignItems: 'center',
                            gap: 5,
                        }}
                    >
                        <Box>
                            <Typography variant="subtitle2" color="lightgray" fontSize="small">
                                Shri Gauranga Samaj
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <IconButton color="inherit">
                            <MessageIcon />
                        </IconButton>
                        <Button variant="text" onClick={handleclicksubscription} color="inherit" sx={{ textTransform: 'capitalize' }}>
                            subscribe
                        </Button>
                        <IconButton color="inherit">
                            <DonateIcon />
                        </IconButton>
                        <Button variant="text" onClick={handleclickdonation} color="inherit" sx={{ textTransform: 'capitalize' }}>
                            Donate
                        </Button>
                        <Button
                            variant="text"
                            color="inherit"
                            sx={{ textTransform: 'capitalize' }}
                            onClick={handleEnglishMenuOpen}
                        >
                            English
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleEnglishMenuClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            <MenuItem onClick={handleEnglishMenuClose}>Hindi</MenuItem>
                            <MenuItem onClick={handleEnglishMenuClose}>Marathi</MenuItem>
                        </Menu>
                            <LoginDropdown />
                    </Box>
                    <Menu
                        anchorEl={anchorNav}
                        open={Boolean(anchorNav)}
                        onClose={closeMenu}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuList>
                            <MenuItem>subscribe</MenuItem>
                            <MenuItem>Donate</MenuItem>
                            <MenuItem>English</MenuItem>
                            <MenuItem>Log In</MenuItem>
                            <MenuItem>Sign up</MenuItem>
                        </MenuList>
                    </Menu>
                </Toolbar>
            </AppBar>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src="/logo.png" sx={{ marginRight: '-1x' }} />
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
                        <Button
                            onClick={handleclickhome}
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
                            Home
                        </Button>
                        <Button
                            variant="text"
                            onClick={handleclickarticlehomepage}
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
                            Articles
                        </Button>
                        <Button
                            variant="text"
                            color="inherit"
                            onClick={handleclickbookhomepage}
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
                            Book
                        </Button>
                        <Button
                            variant="text"
                            onClick={handleclickbooklethomepage}
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
                            Booklet
                        </Button>
                        <Button
                            variant="text"
                            color="inherit"
                            sx={{
                                textTransform: 'capitalize',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                padding: '4px 8px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F2',
                                    color: '#131921',
                                },
                                '@media (max-width:600px)': {
                                    fontSize: '0.6rem',
                                },
                            }}
                        >
                            Calender
                        </Button>
                        <Button
                            variant="text"
                            color="inherit"
                            sx={{
                                textTransform: 'capitalize',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                padding: '4px 8px',
                                '&:hover': {
                                    backgroundColor: '#F0F2F2',
                                    color: '#131921',
                                },
                                '@media (max-width:600px)': {
                                    fontSize: '0.6rem',
                                },
                            }}
                        >
                            About us
                        </Button>
                        <Button variant="text"
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
                            Support
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar >
        </div>
    );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
