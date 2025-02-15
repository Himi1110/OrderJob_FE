import { Button, Divider, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import arrow from '@img/arrow-left.svg';
import Profile from '../talentprofile/Profile';

const TalentProfilePage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'>
      <Divider size='xs' />
      <Link className='my-4 inline-block' to='/find-talent'>
        <Button leftSection={<img src={arrow}/>} color='#4ac6bd' variant='light' fullWidth>
          Back
        </Button>
      </Link>
      <Divider size='xs' />
      <div className='flex gap-5'>
        <Profile />
      </div>
    </div>
  );
};

export default TalentProfilePage;
