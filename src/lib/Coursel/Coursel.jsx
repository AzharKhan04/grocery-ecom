import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Coursel = ({data}) => {

    return (
        <Carousel>
         {
             data.map((d)=>{

                return (
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={d.src}
                    />
                  </Carousel.Item>
          

                )

             })
         }   
      </Carousel>
      

    )


}

Coursel.defaultProps = {
    data:[]
}

export default Coursel;