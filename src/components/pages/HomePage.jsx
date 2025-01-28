import React from 'react';
import Header from '../header/Header';
import DreamJob from '../landingPage/DreamJob';
import Companies from '../landingPage/Companies';
import JobCategory from '../landingPage/JobCategory';
import Working from '../landingPage/Working';
import Testimonials from '../landingPage/Testimonials';
import Subscribe from '../landingPage/Subscribe';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins]'>
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;