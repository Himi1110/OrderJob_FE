import React from 'react';
import SearchBar from '../findJobs/SearchBar';
import { Divider } from '@mantine/core';
import Jobs from '../findJobs/Jobs';

const FindJobs = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins]'>
      <Divider size='xs' mx='lg' />
      <SearchBar />
      <Divider size='xs' mx='lg' />
      <Jobs />
    </div>
  );
};

export default FindJobs;
