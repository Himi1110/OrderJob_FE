import { Carousel } from '@mantine/carousel';
import React from 'react';
import { jobCategory } from '../../data/Data';

const JobCategory = () => {
  return (
    <div className='mt-20 pb-5'>
      <div className='mb-5 text-4xl text-center font-semibold text-mine-shaft-100'>
        Browse <span className='text-java-400'>Job</span> Category
      </div>
      <div className='text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2'>
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>
      <Carousel
        slideSize='22%'
        slideGap='md'
        loop
        className='focus-visible:[&_button]:!outline-none [&_button]:!bg-java-400 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:!opacity-0 [&_button]:!w-10 [&_button]:!h-10'
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className='flex flex-col items-center w-64 gap-1.5 border border-java-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_10px_35px_rgba(0,0,0,0)] !shadow-java-400 my-5 transition duration-300 ease-in-out '>
              <div className='p-2 bg-java-400 rounded-full'>
                <img
                  className='h-8 w-8'
                  src={`/Category/${category.name}.png`}
                  alt='ss'
                />
              </div>
              <div className='text-mine-shaft-200 font-semibold'>
                {category.name}
              </div>
              <div className='text-sm text-center text-mine-shaft-200'>
                {category.desc}
              </div>
              <div className='text-java-400 text-lg'>1k+ new job posted</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
