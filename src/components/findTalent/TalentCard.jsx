import React from 'react';
import heart from '@img/heart.svg';
import { Avatar, Button, Divider, Text } from '@mantine/core';
import map from '@img/MapPin.svg';
import { Link } from 'react-router-dom';

const TalentCard = (props) => {
  return (
    <div className='bg-mine-shaft-900 p-4 w-110 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-java-400'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className=' bg-mine-shaft-800 rounded-full'>
            <Avatar size="lg" src={`/dororo1.jpg`} alt='' />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-semibold text-lg'>{props.name}</div>
            <div className='text-sm text-mine-shaft-300'>
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <img className='cursor-pointer' src={heart} alt='' />
      </div>
      <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-java-400 [&>div]:rounded-lg [&>div]:text-xs'>
        {
          props.topSkills.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))
        }
      </div>
      <Text className='!text-xs !text-mine-shaft-300' lineClamp={3}>
        {props.about}
      </Text>
      <Divider size='xs' color='#4f4f4f' />
      <div className='flex justify-between'>
        <div className='font-semibold text-mine-shaft-200'>
          {props.expectedCtc}
        </div>
        <div className='flex gap-1 text-xs items-center text-mine-shaft-400'>
          <img src={map} alt='' />
          {props.location}
        </div>
      </div>
      <Divider size='xs' color='#4f4f4f' />
      <div className='flex [&>*]:w-1/2 [&>*]:p-1' >
        <Link to="/talent-profile">
          <Button color='#4ac6bd' variant="outline" fullWidth>Profile</Button>
        </Link>
        <div>
        <Button color='#4ac6bd' variant="light" fullWidth>Message</Button>
        </div>
      
      </div>
    </div>
  );
};

export default TalentCard;
