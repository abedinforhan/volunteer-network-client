import React  from 'react';
import { Button, Row } from 'react-bootstrap';
import {Col} from 'reactstrap';


import './TaskCard.css';

const TaskCard = ({id,eventName,imageUrl,date}) => {
     
  const handleEventDelete = (id) =>{
    console.log(id)
    
    fetch(`http://localhost:8080/delete/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
      console.log('deleted successfully')
    })
  }
   

  return (
    <Col  className='mt-3' md={6}> 

     <div
     className='eventTaskCard' >
        <img
        style={{height :"200px", width:'200px'}} 
        src={imageUrl}
       />
       <div className='eventTaskCard__info'>
         <h4>{eventName}</h4>
         <h4>{date}</h4>
         <Button
         onClick={()=>handleEventDelete(id)}
         >Cancel
         </Button>
       </div>

     </div>
    
    </Col>
  );
};

export default TaskCard;