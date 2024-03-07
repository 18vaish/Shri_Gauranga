"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UpgradeToNXTpage from '../UpgradeToNextLevel/page';
import SignOutMsg from './SignOutMsgPop';

export default function LoginDropdown() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [popupSubUpgrade, setOpen] = useState(false);
    const [popupSignOut, setOpenSignOut] = useState(false);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleclickupgrade = () => {
        setAnchorEl(null);
        setOpen(true);
    };

    // const handleclicksignout = () => {
    //     setAnchorEl(null);
    //     setOpenSignOut(true);
    // };

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClick = () => {
        setAnchorEl(null);
        router.push('/ProfileForm');
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                sx={{ color: "white" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Log In | Sign Up {/* Changed from h3 to span */}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
                <MenuItem onClick={handleclickupgrade}>Subscribe to Upgrade</MenuItem>
                <MenuItem >Signout</MenuItem>
            </Menu>
            {popupSubUpgrade && <UpgradeToNXTpage/>} {/* Changed from setOpen to popupSubUpgrade */}
            {popupSignOut && <SignOutMsg/>}
        </div>
    );
}
