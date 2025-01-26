import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links=[
    {name:"Find Jobs",url:"find-jobs"},
    {name:"Find Talent",url:"find-talent"},
    {name:"Upload Job",url:"upload-job"},
    {name:"About Us",url:"about"},
  ]
  return (
    <div className="flex gap-12">
      {links.map((link)=>{
        <Link to={link.url}>{link.name}</Link>
      })}
    </div>
  );
};

export default NavLinks;
