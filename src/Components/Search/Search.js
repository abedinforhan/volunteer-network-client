import React from 'react';
import { Button } from 'react-bootstrap';
import './search.css'

const Search = () => {
  
  return (
    <div className='search'>
       <h2>i grow by helping people in need</h2>  
       <div className='search__input'>
         <input type='text' placeholder='search'/>
         <Button variant="primary">Search</Button>
      </div>
    
    </div>
  );
};

export default Search;