import React, { useState } from "react";
import { Search, } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import './header.css'
import { AppBar, Toolbar, Stack, Typography, Button, Menu, MenuItem, IconButton, MenuList } from "@mui/material";


const Header = () => {
    const [AnchorNav, SetAnchorNav] = useState(null)
    const openMenu = (event) => {
        SetAnchorNav(event.currentTarget)
    }

    const closeMenu = () => {
        SetAnchorNav(null)
    }

    const menudata = ['Visit', 'Exhibition and event', 'Learn with us', 'Research', 'Art', 'Shop']

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>
                    THE BEM
                </Typography>

                <Stack direction='row' sx={{ display: { xs: 'none', md: 'flex' } }} >
                    {menudata.map((navtext, index) => (
                        <Button color="inherit" key={index}>{navtext}</Button>
                    ))}

                    <Button color="inherit" startIcon={<Search />} >search</Button>

                </Stack>

                <Stack sx={{ display: { xs: 'flex', md: 'none' } }} >
                    <IconButton size="large" color="inherit" onClick={openMenu}>
                        <MenuIcon />
                    </IconButton>
                    <div sx={{ justifyContent: 'center', width: '100%' }}>
                        <Menu open={Boolean(AnchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }} >
                            <MenuList >
                                {menudata.map((navtext, index) => (
                                    <MenuItem color='inherit' key={index} >{navtext} </MenuItem>
                                ))}
                                <MenuItem color='inherit' startIcon={<Search />}> Search</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </Stack>

            </Toolbar>

        </AppBar>
    )
}


export default Header;