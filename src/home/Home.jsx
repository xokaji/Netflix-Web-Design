import React from 'react';
import "./Home.scss";
import Navbar from '../components/navbar/Navbar';
import Features from '../components/features/Features';


const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <Features type="movie"/>
    </div>
  )
}

export default Home