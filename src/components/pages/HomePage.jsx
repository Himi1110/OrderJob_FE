import React from 'react';
import Header from '../header/Header';
import DreamJob from '../landingPage/DreamJob';
import Companies from '../landingPage/Companies';
import JobCategory from '../landingPage/JobCategory';

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins]'>
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory />
    </div>
  );
};

export default HomePage;