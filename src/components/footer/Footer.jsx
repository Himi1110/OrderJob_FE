import React from 'react';
import AssetIcon from '@img/Asset.svg';
import facebookIcon from '@img/facebook.svg';
import instagramIcon from '@img/instagram.svg';
import youtubeIcon from '@img/youtube.svg';

const Footer = () => {
  return (
    <div className='mt-20 pb-5'>
      <div className='w-1/4 flex flex-col gap-4'>
        <div className='flex gap-2 items-center text-java-300'>
          <img className='' src={AssetIcon} />
          <div className='text-3xl font-semibold'>OrderJob</div>
        </div>
        <div className='text-sm text-mine-shaft-300'>
          Job portal with user profiles, skill updates, certifications, work
          experience
        </div>
        <div className='flex gap-3 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full'>
          <div>
            <img src={facebookIcon} alt='' />
          </div>
          <div>
            <img src={instagramIcon} alt='' />
          </div>
          <div>
            <img src={youtubeIcon} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
