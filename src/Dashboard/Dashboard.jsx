import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppHeader from './AppHeader';
import Categories from "./Categories";
import { DASHBOARD_DATA } from "../Constants/app_data";
import './Dashboard.css';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    

    return (
        <React.Fragment>
             <AppHeader/>
             {
                 DASHBOARD_DATA.map((block,index)=>{

                     return (
                        <div key = {index} className="block_root">
                            {
                                block.data_type === 'card' &&
                                <React.Fragment>
                                    {
                                    block.title &&
                                    <React.Fragment>
                                    <Typography style={{color:'darkcyan'}} variant="h6" gutterBottom component="div">
                                        {block.title}
                                    </Typography>
                                    <br/>
                                    </React.Fragment>
                                    }
                                    <Grid container spacing={1}>

                                    {
                                        block.data && block.data.map((data,index)=>{
                                            return (

                                            <Grid  item xs={block.col_size}>
                                                <div onClick = {()=>{
                                                    const url = `/category?id=${data.name}`
                                                    navigate(url)

                                                }}>
                                             <div style={{marginBottom:'12px'}}>   
                                            <div className="bordered-card">
                                                <img  height={120}   src={data.img_url}/> 
                                            </div>
                                             </div>
                                             </div>
                                            </Grid>
                                            )
                                      

                                        })
                      
                                    }
                                    </Grid>

                                </React.Fragment>
                
                            
                
                

                            }

                            {
                                block.data_type == 'images' &&
                                <React.Fragment>
                                    {
                                    block.title &&
                                    <React.Fragment>
                                    <Typography style={{color:'darkcyan'}} variant="h6" gutterBottom component="div">
                                        {block.title}
                                    </Typography>
                                    <br/>
                                    </React.Fragment>
                                        

                                    }
                                    <Grid container spacing ={1}>

                                    {
                                       block.data && block.data.map((data,index)=>{
                                            return (

                                                <Grid item xs={block.col_size}>
                                                <div style={{marginBottom:'12px'}}>   
                                                   <img style={{width:'100%'}}  src={data.img_url}/> 
                                                 
                                                </div>
                                               </Grid>
   


                                            )
                                        })
                                    }
                                    </Grid>
                                    
        


                                    
                                </React.Fragment>    
                            }
                        
                        </div>    


                     )
                 })

             }   
        </React.Fragment>
       
        

    )

}


export default React.memo(Dashboard);