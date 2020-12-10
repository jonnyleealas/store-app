import React from 'react';
import Categories from '../storefront/categories.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




function NavBar (){
  return(
    <>
      <AppBar color="grey" position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
        
          </IconButton> 
          <Typography variant="h6" >
          OUR STORE 
          </Typography>
          <Button edge="end" color="inherit" >CART(0)</Button>
        </Toolbar>
      </AppBar>
      <span>Browser Our Categories</span>
      <Categories />
    </>
  );
}

export default NavBar;
