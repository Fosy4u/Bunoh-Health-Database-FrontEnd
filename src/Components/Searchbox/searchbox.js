import React from 'react';
const Searchbox = ({searchchange}) => {


    
    return (
        <div className= 'pa4'>
           <input
                className='pa3 input-reset ba bg-light-blue w-100 measure center  '
                type='search'
                placeholder='Search Employee'
                onChange={searchchange}
            />
           
            
        </div> 
    );
}
export default Searchbox;