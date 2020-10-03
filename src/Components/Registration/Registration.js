import React, { useContext } from 'react';
import './Registration.css'
import headerLogo from '../../Images/logos/headerLogo.png'

import {useHistory} from 'react-router-dom'
//hook form
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const Registration = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
    //post data to database 
    fetch('https://whispering-crag-86723.herokuapp.com/addEvent', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(history.push('/events'))
  }
  const [user, setUser] = useContext(UserContext)



  return (
    <div className='registration'>
      <img
        className='registration__logo'
        src={headerLogo}
      />

      <div className='registration__form'>
        <h5>Register as a Volunteer</h5>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            name="FullName"
            defaultValue={user.name || 'Full Name'}
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            name="email"
            defaultValue={user.email || 'Username or email'}
            ref={register({ required: true })}
          />
          {errors.email && <span>email is required</span>}

          <input
            name="date"
            type='date'
            defaultValue='Date'
            ref={register({ required: true })}
          />
          {errors.date && <span>plaese enter date</span>}

          <input
            name="description"
            defaultValue='Description'
            ref={register({ required: true })}
          />
          {errors.description && <span>description is required</span>}

          < input
            name="volunteerType"
            defaultValue={user.volunteerCatagory || ''}
            ref={register({ required: true })}
          />
          {errors.volunteerType && <span>volunteer type is required</span>}
          
          <input
            className='photo__input'
            name="photo"
            defaultValue={user.imageUrl || ''}
            ref={register({ required: true })}
          />

          <br />
          <input
            type='submit'
            className='registratiom__submitBtn'
            value='Registration'
          />
        </form>
      </div>
    </div>
  );
};

export default Registration;