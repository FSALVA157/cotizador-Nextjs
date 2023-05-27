
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'                
            >
            <MenuOutlinedIcon fontSize='large'></MenuOutlinedIcon>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
