import React, { useState } from "react";
import { useCartState } from "../Context/Context";
import Ratings from './Ratings';


import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
  },
  content: {
    padding: theme.spacing(3),
  },
}));

const SimpleDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
  };

   // useContext 
   const {filterState:{outOfStock, byRating, byFastDelivery, bySearch, sort}, filterDispatch} = useCartState();
   console.log("sort ", sort);
   console.log("rating  ", byRating);

  return (
    <div>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>
          <ListItem style={{backgroundColor:'red'}}>
            <ListItemText primary="Filter Products" style={{color:'white', fontWeight:'bold', textAlign:'center'}}/>
          </ListItem>
          
       
          

          <ListItem>
          <form action="" onSubmit={formSubmit} method="post">
            <ListItem>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="lowToHigh"
                checked={ sort === "lowToHigh"? true: false}
                onChange={()=>filterDispatch({type:"SORT_BY_PRICE", payload:"lowToHigh"})}
              />
              <label className="form-check-label" htmlFor="lowToHigh" >
                Price low to high
              </label>
            </div>
            </ListItem>
            <ListItem>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="highToLow"
                checked={sort === "highToLow"? true: false}
                onChange={()=> filterDispatch({type:"SORT_BY_PRICE", payload:"highToLow"})}
              />
              <label className="form-check-label" htmlFor="highToLow">
                Price high to low
              </label>
            </div>
            </ListItem>
            <ListItem>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="outOfStock"
                onChange={()=> filterDispatch({type:"FILTER_BY_STOCK"})}
                checked={outOfStock}
              />
              <label className="form-check-label" htmlFor="outOfStock">
                include Out of stock
              </label>
            </div>
            </ListItem>
            <ListItem>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="fastDelivery"
                onChange= {()=>filterDispatch({type:"FAST_DELIVERY"})}
                checked={byFastDelivery}
              />
              <label className="form-check-label" htmlFor="fastDelivery" >
                fast Delivery only
              </label>
            </div>
            </ListItem>
            <ListItem>
            {/* rating */}
            <Ratings
            rate={byRating}
            styles={{cursor:'pointer'}}
            increaseRate={(i)=>filterDispatch({type:"SORT_BY_RATING", payload:i+1})}
             /> <span style={{paddingLeft:'8px'}}>Select ratings</span>
            </ListItem>
            <Button variant="contained" className=" w-100 mt-3" onClick={()=> filterDispatch({type:"CLEAR_FILTER"})}>Clear Filter</Button>
          </form>
          </ListItem>
          
        </List>
      </Drawer>
     
      <main className={classes.content}>
        <li
          edge="start"
          className={classes.menuButton}
          color="inherit"
          style={{cursor:'pointer', display: 'inline-block'}}
          onClick={() => setOpen(true)}
        >
          Filter
          <i class="fal fa-filter fa-2x"></i>
        </li>
       
      </main>
    </div>
  );
};

export default SimpleDrawer;
