import React, { useState } from 'react';
import { searchFields } from '../../data/TalentData';
import { Divider, Input, RangeSlider } from '@mantine/core';
import { MultiInput } from '../findJobs/MultiInput';
import usercircle from '@img/usercircle.svg';

const SearchBar = () => {
  const [value, setValue] = useState([1, 100]);
  return (
    <div className='flex gap-2 px-5 py-8'>
      <div className='flex items-center'>
        <div className='bg-mine-shaft-900 rounded-full p-1 justify-center mr-2'>
          <img src={usercircle} alt='' />
        </div>
        <Input className='[&_input]:!placeholder-mine-shaft-200' variant='unstyled' placeholder='Talent Name' />
      </div>
      {searchFields.map((item, index) => (
        <>
          <div key={index} className='flex flex-col w-1/5'>
            <MultiInput {...item} />
          </div>
          <Divider mr='xs' size='xs' orientation='vertical' />
        </>
      ))}
      <div className='w-1/5 [&_.mantine-Slider-label]:!translate-y-10'>
        <div className='flex text-sm justify-between'>
          <div>Salary</div>
          <div>
            ${value[0]} - ${value[1]}
          </div>
        </div>
        <RangeSlider
          color='#4ac6bd'
          size='xs'
          value={value}
          onChange={setValue}
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear'
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
