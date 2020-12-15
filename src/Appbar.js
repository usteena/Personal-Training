import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, IconButton, Typography, Drawer, MenuItem, Divider} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import ResponsiveDrawer from './Drawer'


export default function SearchAppBar() {
 const [open, setOpen] = useState(false);

 const handleDrawer = () => {
   setOpen(true)
 }

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <IconButton onClick={handleDrawer}
            aria-label="app"
            color="inherit"
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" >
            
          </Typography>
         
        </Toolbar>
      </AppBar>
      <ResponsiveDrawer />
    </div>
  );
}