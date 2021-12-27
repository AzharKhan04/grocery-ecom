# React Counter



# Installation

Add react-counter-comp to your project by executing 

    npm install --save react-counter-comp

# Usage
Here's an example of basic usage:

    import React from 'react';
    import Counter from 'react-counter-comp';
    
    function MyApp() {
    
      const onChange = (count) => {
          console.log(count)
      }
    
      return (
        <div>
          <Counter
            color= {'green'}
            onChange={onChange}
            text={'ADD TO CART'}
          />
        </div>
      );
    }
