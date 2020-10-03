import React, { useContext, useEffect, useState } from 'react';
import './EventTask.css'
import Header from '../Header/Header'
import { Container, Row } from 'reactstrap';
import TaskCard from './TaskCard/TaskCard';
import { UserContext } from '../../App';

const EventTask = () => {

const [user,setUser]=useContext(UserContext)
 // get events from database
  const [events,setevents]=useState([])
 
  useEffect(()=>{
    fetch(`https://whispering-crag-86723.herokuapp.com/events?email=${user.email}`)
    .then(res => res.json())
    .then(data=> setevents(data))
  },[events])


   return (
    <div className='eventTask'> 
      <Header buttonsHide='true'/>
     <Container className='mt-5'>
        <Row>
          { events.map(evnt=> 
            <TaskCard 
              id={evnt._id}
              eventName={evnt.volunteerType} 
              imageUrl={evnt.photo}
              date={evnt.date}
              />
              )
          }
          </Row>
     </Container>
    </div>
  );
};

export default EventTask;