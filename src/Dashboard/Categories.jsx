import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {APP_DATA,PRODUCT_CATEGORIES,DASHBOARD_DATA,ALL_PRODUCTS} from '../Constants/app_data'
import './Categories.css'
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import Counter from "../lib/Counter";

const Categories = (props) => {

    let [products,setProducts] = useState([])
    let [category,setCategory] = useState('')

    const navigate = useNavigate()






     useEffect(()=>{

        const params = new URLSearchParams(window.location.search)
        let id = params.get('id')



        let newProducts = ALL_PRODUCTS.filter((product)=>{
            return product.category === id
        })

        setCategory(id)


        setProducts(newProducts)

     },[])

    const getCount = (count) => {

        console.log(count)

    }    
    return (
        <React.Fragment>
        <div className="top_bar">
            <div style={{display:'flex'}}>
             <div onClick={()=>{
                 navigate('/')

             }}>   
            <ArrowBackIcon/>
            </div>
            <div style={{padding:'2px'}}>
            <Typography variant="h7" gutterBottom component="div">{category}</Typography>

              </div>  

            </div>
                
        </div> 
        <div style={{marginTop:'12px'}}>
         <Grid container spacing={0}> 
         {
             products.map((product,index)=>{

                let  productName = product.name;
                if(productName && productName.length>30) {
                    productName = product.name.substr(0, 30)+'...'

                }
                
                 return (
                    <Grid key = {index} item xs={6}>
                    <div className="product_root"> 
                    <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {
                            product.img_url &&
                            <img height ={100} width = {100} src={product.img_url}/>

                        }


                     </Grid>
                     <Grid item xs={12}>
                     <Typography  gutterBottom variant="h8" component="div">
                         {productName}
          
                    </Typography>

                     </Grid>
                     <Grid item xs={12}>
                     <Typography gutterBottom variant="h9" component="div">
                       <div style={{textAlign:'center'}}>  
                     &#8377;{`${product.price||''}`}
                     </div>

          
                    </Typography>
                     </Grid>
                     <Grid item xs={12}>
                       {/* <div>  
                     <Counter color={'darkcyan'} text = {'Add To Cart'} onChange={getCount}/> 
                     </div> 
                       */}

<div>
      <Counter
        color= {'darkcyan'}
        onChange={getCount}
        text={'ADD TO CART'}
      />
    </div>

                     </Grid>



                     </Grid>   

                     </div>   
        
                </Grid>
        
                )
             })
         }  
    
        </Grid>

         </div>      

        </React.Fragment>
    )

}


export default React.memo(Categories);