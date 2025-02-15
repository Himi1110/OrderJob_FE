import React from 'react';
import map from '@img/MapPin.svg';
import briefcase from '@img/Briefcase.svg';
import { Button, Divider } from '@mantine/core';

const Profile = () => {
  return (
    <div className='w-2/3'>
      <div className='relative'>
        <img
          className='rounded-t-2xl object-fill w-full h-60'
          src='/bia.jpeg'
          alt=''
        />
        <img
          className='rounded-full w-48 h-48 -bottom-2/9 absolute left-4 border-mine-shaft-950 border-6'
          src='/dororo1.jpg'
        />
      </div>
      <div className='px-3 mt-16'>
        <div className='text-3xl font-semibold flex justify-between'>
          Jarrod Wood{' '}
          <Button color='#4ac6bd' variant='light'>
            Profile
          </Button>
        </div>
        <div className='text-xl flex gap-1 items-center'>
          <img src={briefcase} alt='' /> Software Engineer &bull; Google
        </div>
        <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
          <img src={map} alt='' />
          Vinh Bao, Hai Phong
        </div>
      </div>
      <Divider size='xs' my='xl'/>
      <div>
        <div className='text-2xl font-semibold mb-3'>About</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit, voluptatum voluptate eum voluptatibus natus nihil blanditiis repudiandae facilis quidem distinctio error soluta placeat esse commodi numquam quas, autem consequuntur?</div>
      </div>
    </div>
  );
};

export default Profile;
