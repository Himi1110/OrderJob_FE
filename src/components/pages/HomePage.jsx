import React from 'react';
import DreamJob from '../landingPage/DreamJob';
import Companies from '../landingPage/Companies';
import JobCategory from '../landingPage/JobCategory';
import Working from '../landingPage/Working';
import Testimonials from '../landingPage/Testimonials';
import Subscribe from '../landingPage/Subscribe';

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins]'>
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default HomePage;