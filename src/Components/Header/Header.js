import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import headerLogo from '../../Images/logos/headerLogo.png'
import './Header.css'

const Header = ({ buttonsHide}) => {
 
  const [user,setUser]=useContext(UserContext)

  return (
    <div className='header'>
      <div className='header__logo'>
        <img className='header__logoImage' src={headerLogo}/>
      </div>
      <div className='header__nav'>
        <span>Home</span>
        <span>Donation</span>
        <span>Events</span>
        
        <span>Blog</span>
      </div>
      {
        buttonsHide ? 
        <p>{user.name}</p>
        :
        <div className='header__buttons'>
        <Button variant="primary">Register</Button>{' '}
        <Link to='/admin'>
         <Button variant="secondary">Admin</Button>{' '}
        </Link>
      </div>
      }
    </div>
  );
};

export default Header;