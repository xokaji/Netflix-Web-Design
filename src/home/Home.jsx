import React from 'react';
import "./Home.scss";
import Navbar from '../components/navbar/Navbar';
import Features from '../components/features/Features';
import List from '../components/lists/List';

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <Features/>
      <List/>
      <List/>
      <List/>
    </div>
  )
  }
export default Home