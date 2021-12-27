import React, { useState } from "react";
import PropTypes from 'prop-types';

import './index.css';

const Counter = ({onChange,text,color}) => {

    let [count,setCount] = useState(0)

    const incr = () => {

        let newCount = count+1;
        setCount(newCount)
        if(onChange) {
            onChange(newCount)
        }

    }

    const decr = (evt) => {

        evt.stopPropagation();
        let newCount = count-1;
        setCount(newCount)
        if(onChange) {
            onChange(newCount)
        }

    }

    return (
     <React.Fragment>
         {

        <div onClick={incr} style= {{backgroundColor:color}} className="adder-main">
            {
                count ?
                <div onClick={decr}>
                    {'-'}
                </div>  : <></>  
            }
             {
                 !count ? <div>{text}</div> : 
                 <div>
                     {
                         count
                     }

                  </div>   
                 
             }
             {
                count ?
                <div onClick={incr}>
                    {'+'}
                </div>  :<></>   
            } 
     
         </div>
         }
         

     </React.Fragment>   
   
    )

}

Counter.propTypes = {
    text:PropTypes.string,
    onChange:PropTypes.func,
    color:PropTypes.string
}   

Counter.defaultProps = {
    text:'Add To Cart',
    color:'green'
}

export default Counter;