import React, { useContext } from 'react';
import './Login.css'
import headerLogo from '../../Images/logos/headerLogo.png'
import { Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignIn, initializeFirebase } from './loginManager';

const Login = () => {
  let history = useHistory();

  const [user,setUser]=useContext(UserContext)
  
  initializeFirebase();
 
  const handleGoogleSignIn = () =>{
     googleSignIn()
      .then(res=> {
        const userInfo={...user,...res}
        setUser(userInfo)
        history.push('/registration')
      })
  }
 


  

return (
    <div className='login'>
      <img
      src={headerLogo}
      />
      <div className='login__container'>
       <h5>Login With</h5>
       <Button 
       onClick={handleGoogleSignIn}
       className='login__googleBtn'>
        Continue with Google 
       </Button>
       <p>
         Don't have an account? <Link to='/registration'>
           Create an account
        </Link></p>

      
      </div>
    </div>
  );
};

export default Login;