import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/mylist">
        My List
      </Link>
    </div>
  );
}

export default Nav;