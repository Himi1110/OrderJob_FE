import { Rating } from '@mantine/core';
import React from 'react';
import { testimonials } from '../../data/Data';

const Testimonials = () => {
  return (
    <div className='mt-20 pb-5'>
      <div className='mb-5 text-4xl text-center font-semibold text-mine-shaft-100'>
        What <span className='text-java-400'>User</span> says about us?
      </div>
      <div className='flex gap-10 justify-between px-10'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='flex flex-col gap-3 w-[20%] border-java-400 border p-2 rounded-xl'>
            <div className='flex items-center gap-2'>
              <img
                src={testimonial.src}
                className='h-16 w-16 rounded-full'
                alt=''
              />
              <div>
                <div className='text-mine-shaft-100 text-lg font-semibold'>
                  {testimonial.name}
                </div>
                <Rating value={testimonial.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className='text-xs text-mine-shaft-300'>
              {testimonial.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
