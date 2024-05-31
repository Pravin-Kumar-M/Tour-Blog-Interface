import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PlaceIcon from '@mui/icons-material/Place';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const styling = {
    style: {
        color: 'black',
        fontWeight: 'bold'
    }
}


const Menu = () => {
    return (
        <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position={'fixed'}>
                <List sx={{ marginTop: '20px' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FlightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Plan Your Trip" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Things to do" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TravelExploreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccessibilityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facts" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PlaceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Places" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AirplaneTicketIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tickets" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BookOnlineIcon />
                            </ListItemIcon>
                            <ListItemText primary="Book Online" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help Center" primaryTypographyProps={styling} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>

        </Box >
    )
}

export default Menu