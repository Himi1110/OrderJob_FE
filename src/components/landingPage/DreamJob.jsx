import React from 'react';
import BoyImg from '@img/Boy.png';
import { Avatar, TextInput } from '@mantine/core';
import SearchIcon from '@img/Search.svg';

const DreamJob = () => {
  return (
    <div className='flex items-center px-20'>
      <div className='flex flex-col w-[45%] gap-4'>
        <div className='text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-java-400'>
          Find your <span>dream</span> <span>job</span> with us
        </div>
        <div className='text-lg text-mine-shaft-200'>
          Good life begins with a good company. Start explore thousands of jobs
          in one place
        </div>
        <div className='flex gap-3 mt-3'>
          <TextInput
            className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
            variant='unstyled'
            label='job title'
            placeholder='Software Engineer, etc.'
          />
          <TextInput
            className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
            variant='unstyled'
            label='Job type'
            placeholder='Full-time, etc.'
          />
          <div className='flex items-center justify-center w-20 bg-java-400 rounded-lg hover:bg-java-500 cursor-pointer'>
            <img className='h-[85%] w-[85%] p-2' src={SearchIcon} />
          </div>
        </div>
      </div>
      <div className='w-[55%] flex items-center justify-center'>
        <div className='w-[30rem] relative'>
          <img src={BoyImg} alt='' />
          <div className='absolute -right-10 top-[50%] w-fit border-java-400 border rounded-lg p-2 backdrop-blur-md'>
            <div className='text-center mb-1 text-sm text-mine-shaft-100'>
              10k+ got job
            </div>
            <Avatar.Group>
              <Avatar src='image.png' />
              <Avatar src='image.png' />
              <Avatar src='image.png' />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>
          <div className='absolute -left-10 top-[28%] w-fit border-java-400 border rounded-lg p-2 backdrop-blur-md flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <div className='w-12 h-12 p-1 bg-mine-shaft-900 rounded-lg'>
                <img src="/Google.png" alt="" />
              </div>
              <div className='text-mine-shaft-100'>
                <div>Software Engineer</div>
                <div className='text-mine-shaft-200 text-xs'>New York</div>
              </div>
            </div>
            <div className='flex gap-2 items-center text-mine-shaft-200 text-xs gap-7'>
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
