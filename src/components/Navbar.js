import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <div className='main-nav'>
        <div className='nav-1'>
          <a href='/HomePage' alt='HomePage'>
            <h2>Home </h2>
          </a>
        </div>
        <div className='nav-2'>
          <ul>
            <a href='/resume' alt='resume'>
              <li>Resume </li>
            </a>
            <a href='/resume' alt='resume'>
              <li>Family </li>
            </a>
            <a href='/resume' alt='resume'>
              <li>Projects </li>
            </a>
            <a href='/resume' alt='resume'>
              <li>Footer </li>
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
