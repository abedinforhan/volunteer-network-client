import React from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import Search from '../Search/Search';
import './Home.css'

const Home = () => {
  return (
    <div className='home' >
      <Header/>
      <Search/>
      <Cards/>
     
    </div>
  );
}; 

export default Home;