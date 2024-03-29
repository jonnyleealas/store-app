import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';



function NavBar() {

  const currentCart = useSelector((state) => state.cart);

  return (
    <>
      <AppBar color="transparent" position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h6" >
            OUR STORE
          </Typography>
          <div style={{ marginLeft: "55%" }}>
            <Button edge="end" color="inherit" ><ShoppingCartIcon />CART</Button>

          </div>
          <div>({currentCart.cartTotalQty})</div>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
