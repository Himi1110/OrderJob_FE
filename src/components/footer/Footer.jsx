import React from 'react';
import AssetIcon from '@img/Asset.svg';
import facebookIcon from '@img/facebook.svg';
import instagramIcon from '@img/instagram.svg';
import youtubeIcon from '@img/youtube.svg';
import { footerLinks } from '../../data/Data';

const Footer = () => {
  return (
    <div className='pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-[poppins]'>
      <div className='w-1/3 flex flex-col gap-4'>
        <div className='flex gap-2 items-center text-java-300'>
          <img className='' src={AssetIcon} />
          <div className='text-3xl font-semibold'>OrderJob</div>
        </div>
        <div className='text-sm text-mine-shaft-300'>
          Job portal with user profiles, skill updates, certifications, work
          experience
        </div>
        <div className='flex gap-3 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:hover:cursor-pointer [&>div]:hover:bg-mine-shaft-600 '>
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
      {
        footerLinks.map((link, index)=>(
          <div key={index}>
            <div className='text-lg font-semibold mb-4 text-java-400'>{link.title}</div>
            {
              link.links.map((item, index)=>(
                <div key={index} className='text-sm text-mine-shaft-300 text-sm hover:text-java-400 cursor-pointer mb-1 hover:translate-x-0.5 transition duration-200'>{item}</div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default Footer;
