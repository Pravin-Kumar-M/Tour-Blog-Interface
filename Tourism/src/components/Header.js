import { AppBar, Avatar, Badge, Box, IconButton, MenuItem, Toolbar, Tooltip, Typography, styled } from '@mui/material';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import World from '../assests/w.jpg';
import Menu from '@mui/material/Menu';

const StyledHeader = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const BadgeColor = styled(IconButton)({
    '&:hover': {
        backgroundColor: 'black',
    }
});

const settings = ['Profile', 'Account', 'Logout', 'Discount'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <AppBar position='sticky'>
            <StyledHeader>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Avatar alt='world' src={World} sx={{ cursor: 'pointer' }} />
                    <Typography variant='h5'
                        sx={{
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontFamily: 'cursive',
                            color: 'aliceblue',
                            ml: 2,
                            fontSize: { lg: '30px', xs: '20px' }
                        }}>
                        Explore the World
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <BadgeColor>
                        <Badge badgeContent={5} color='error'>
                            <MailIcon sx={{ color: 'white' }} titleAccess='Messages' />
                        </Badge>
                    </BadgeColor>
                    <BadgeColor>
                        <Badge badgeContent={20} color='error'>
                            <NotificationsIcon sx={{ color: 'white' }} titleAccess='Notification' />
                        </Badge>
                    </BadgeColor>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ backgroundColor: 'green' }}>Pk</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Box>
            </StyledHeader>
        </AppBar>
    );
}

export default Header;
