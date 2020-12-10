import React from 'react';
import {AppBar,Toolbar, IconButton, Typography, Button} from  '@material-ui/core';




function NavBar (){
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
        
          </IconButton> 
          <Typography variant="h6" >
          News 
          </Typography>
          <Button edge="end" color="inherit" >CART</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
