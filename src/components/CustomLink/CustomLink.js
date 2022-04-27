import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link-div">
      <Link
        style={{
          fontWeight: match ? 'bold' : 'normal',
          textUnderlinePosition: match ? 'under' : 'auto',
          textDecoration: match ? 'underline' : 'none',
          textDecorationColor: match ? '#1DA1F2' : 'black',
          textDecorationThickness: match ? '4px' : 'auto',
          textUnderlineOffset: match ? '3px' : 'auto',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
