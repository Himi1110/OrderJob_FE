import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: 'Find Jobs', url: 'find-jobs' },
    { name: 'Find Talent', url: 'find-talent' },
    { name: 'Upload Job', url: 'upload-job' },
    { name: 'About Us', url: 'about' }
  ];

  const location = useLocation();
  return (
    <div className='flex gap-12 text-mine-shaft-300 h-full items-center'>
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname == '/' + link.url
              ? 'text-java-400 border-java-400'
              : 'border-transparent'
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={`/${link.url}`}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
