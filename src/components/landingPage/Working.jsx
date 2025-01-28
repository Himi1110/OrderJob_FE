import React from 'react';
import { work } from '../../data/Data';

const Working = () => {
  return (
    <div className='mt-20 pb-5'>
      <div className='mb-5 text-4xl text-center font-semibold text-mine-shaft-100'>
        How it <span className='text-java-400'>Works</span>
      </div>
      <div className='text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2'>
        Effortlessly navigate through the process and land your dream job.
      </div>
      <div className='flex gap-5 px-16 justify-between items-center'>
        <div className='relative'>
          <img className='w-[30rem]' src='/Working/Girl.png' alt='' />
          <div className='w-36 absolute top-[10%] right-0 flex flex-col items-center gap-1 border border-java-400 rounded-xl p-2 backdrop-blur-md'> 
            <img className='h-16 w-16 rounded-full' src="/dororo.jpg" alt="" />
            <div className='text-sm font-semibold text-mine-shaft-200 text-center'>Complete your profile</div>
            <div className='text-xs text-mine-shaft-300'>70% Completed</div>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          {work.map((item, index) => (
            <div key={index} className='flex items-center gap-4'>
              <div className='p-2.5 bg-java-300 rounded-full'>
                <img
                  className='h-12 w-12'
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className='text-mine-shaft-200 text-xl font-semibold'>
                  {item.name}
                </div>
                <div className='text-mine-shaft-300'>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
