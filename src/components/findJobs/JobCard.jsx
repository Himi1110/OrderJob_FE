import React from 'react';
import bookmark from '@img/bookmark.svg';
import { Divider, Text } from '@mantine/core';
import clock from '@img/clock.svg';

const JobCard = (props) => {
  return (
    <div className='bg-mine-shaft-900 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-java-400'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'>
            <img className='h-7' src={`/Icons/${props.company}.png`} alt='' />
          </div>
          <div>
            <div className='font-semibold'>{props.jobTitle}</div>
            <div className='text-xs text-mine-shaft-300'>
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <img className='cursor-pointer' src={bookmark} alt='' />
      </div>
      <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-java-400 [&>div]:rounded-lg [&>div]:text-xs'>
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text className='!text-xs !text-mine-shaft-300' lineClamp={3}>
        {props.description}
      </Text>
      <Divider size="xs"  color='#4f4f4f'/>
      <div className='flex justify-between'>
        <div className='font-semibold text-mine-shaft-200'>${props.package}</div>
        <div className='flex gap-1 text-xs items-center text-mine-shaft-400'>
          <img src={clock} alt="" />
          {props.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobCard;
