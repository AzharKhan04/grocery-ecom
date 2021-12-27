import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './AppHeader.css';
import {APP_DATA,PRODUCT_CATEGORIES} from '../Constants/app_data'
import CartIcon from "../lib/CartIcon/CartIcon";
const AppHeader = () => {


    return (
        <div className="app_header">      
        <div>   
            <Typography variant="h5" gutterBottom component="div">{APP_DATA.brand}</Typography>
            </div>
            <div>
        <CartIcon/>

        </div>       

        </div>

        

    )

}


export default React.memo(AppHeader);