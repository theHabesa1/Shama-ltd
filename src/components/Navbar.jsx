import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
import logo from "../assets/shama.png"

// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: '#ffffff', 
        }}
        elevation={0}
        >
            <StyledToolbar>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <img
        src={logo}
        alt="HBSales Logo"
        style={{
            height: 'auto',
            width: '50px',
            cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
        }}
    />
</a>


                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                              sx={{
                                color: '#000',
                                textDecoration: 'none', // Remove the default underline
                                "&:hover": {
                                    borderBottom: '2px solid #3632A8', // Add a white line underline on hover
                                   
                                }
                            }}
                            
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
