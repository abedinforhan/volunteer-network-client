import React, { useState } from 'react';
import './Cards.css'
import { Row, Container } from 'reactstrap';
import SingleCard from './SingleCard/SingleCard';
import { volunteerCatagory } from '../volunteerCatagory';


const Cards = () => {

 const [catagory,setCatagory]=useState(volunteerCatagory)  
 console.log(catagory)
  return (
    <Container>
      <Row className='mt-5'>
       {
         catagory.map(cat => <SingleCard name={cat.name} url={cat.url} />)
       }
      </Row>
    </Container>
  );
};

export default Cards;