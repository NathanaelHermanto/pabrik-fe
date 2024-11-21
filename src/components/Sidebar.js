import React from 'react';
import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Typography, 
    Box, 
    Divider, 
    Collapse 
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { IconButton, useMediaQuery } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const location = useLocation();
    const drawerWidth = 240;
    const { user } = useAuth(); 
    const [open, setOpen] = useState(true); 
    const isMobile = useMediaQuery('(max-width:600px)');
    const [openInventory, setOpenInventory] = useState(false);

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    ];

    const inventoryItems = [
        { text: 'Paddy', path: '/inventory/paddy' },
        { text: 'Batch', path: '/inventory/batch' },
        { text: 'Rice', path: '/inventory/rice' },
    ];

    const toggleSidebar = () => setOpen(!open);

    const handleToggleInventory = () => {
        setOpenInventory(!openInventory);
    };


    return (
        <>
            {/* Hamburger menu for small screens */}
            {isMobile && (
                <IconButton
                    color="inherit"
                    aria-label="open sidebar"
                    onClick={toggleSidebar}
                    sx={{
                        boxShadow: 1,
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        zIndex: 1000, // Ensure the button is above the sidebar
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#1a1a2e',
                        color: '#fff',
                    },
                    position: 'relative',
                }}
            >
                <Box sx={{ padding: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Pabrik
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: '#2e2e4d' }} />
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            component={Link}
                            to={item.path}
                            sx={{
                                backgroundColor: location.pathname === item.path ? '#3949ab' : 'transparent',
                                color: location.pathname === item.path ? '#fff' : '#cfd8dc',
                                '&:hover': { backgroundColor: '#303f9f' },
                            }}
                        >
                            <ListItemIcon sx={{ color: location.pathname === item.path ? '#fff' : '#cfd8dc' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}

<ListItem
                    button
                    onClick={handleToggleInventory}
                    sx={{
                        backgroundColor: openInventory ? '#3949ab' : 'transparent',
                        color: openInventory ? '#fff' : '#cfd8dc',
                        '&:hover': { backgroundColor: '#303f9f' },
                    }}
                >
                    <ListItemIcon sx={{ color: openInventory ? '#fff' : '#cfd8dc' }}>
                        <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inventory" />
                    {openInventory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>

                {/* Dropdown Menu Items */}
                <Collapse in={openInventory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {inventoryItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                component={Link}
                                to={item.path}
                                sx={{
                                    pl: 4,
                                    backgroundColor: location.pathname === item.path ? '#3949ab' : 'transparent',
                                    '&:hover': { backgroundColor: '#303f9f' },
                                    color: '#fff',
                                }}
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                </List>
                <Divider sx={{ borderColor: '#2e2e4d', marginTop: 'auto' }} />

                <Box sx={{ padding: 2, position: 'absolute', bottom: 0, width: '100%', textAlign: 'left' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                        {user? user.firstname : "firstname"} {user? user.lastname : "lastname"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888' }}>
                        {user? user.email : "email"}
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;
