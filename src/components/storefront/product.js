import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {If, Else, Then} from 'react-if';

import SimpleCart from '../cart/simpleCart.js';
import * as productActions  from '../../store/products.js'
import * as actions from '../../store/cart.js'
// import * prodAction from '../products

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function Products() {

    const dispatch = useDispatch();

    let productsMap = useSelector((state) => state.products);
    console.log('PRODUCTS MAP',productsMap)

    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    productsMap = productsMap.filter(product => product.category === currentCategory.name);

    const addItem = (item) => {
      dispatch(actions.increment(item));// this increment cart.js
    
      //dispatch(productActions.decrementQuantity(item))//this comes from products actions
    }

  //   useEffect ( () => {
  //     dispatch(getProducts())
  // },[])

  const classes = useStyles();
    return(
      <>
        {/* <Typography variant="h5">PRODUCTS:</Typography> */}
        <div>
            <ul>
                {productsMap.map((item) => (

                <div key={Math.random()}>
                <If condition={item.inStock <= 0}>
                  <Then>
                    Name:{item.name}, 
                    Price: {item.price}
                    In Stock: {item.inStock}
                  </Then>
                    <Else>

                    <Card className={classes.root}>
                   <CardActionArea>
                     <CardMedia
                       className={classes.media}
                       image="/static/images/cards/contemplative-reptile.jpg"
                       title="Contemplative Reptile"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {item.name}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {/* <img width="300px" src={item.images[0]}></img> */}
                         {item.description}
                         Price: {item.price}
                         <br></br>
                         In Stock: {item.inStock}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="primary" onClick={()=>addItem(item)}>
                       Add To Cart
                         </Button>
                        {/* <Button size="small" color="primary">
                          Share
                         </Button> */}
                   </CardActions>
                 </Card>
                  </Else>
                </If>
              </div> 
            ))}
            </ul> 
            <SimpleCart />
        </div>
      </>
    )
  }
