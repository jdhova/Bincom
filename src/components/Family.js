import React, { Fragment } from 'react';
import emeka2 from '../images/emeka-2.PNG';
import emeka1 from '../images/emeka1.PNG';
import shewanda from '../images/shewanda.JPG';
import shewanda2 from '../images/shewanda2.JPG';

const Family = () => {
  return (
    <Fragment>
      <div className='main-family'>
        <div className='family1'>
          <h2>Family and Friends</h2>
        </div>
        <div class='family2'>
          <div className='one'>
            <img src={emeka2} alt='bincom' />
            <h3>Emeka</h3>

            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
            </a>
          </div>

          <div className='one'>
            <img src={emeka1} alt='rental' />
            <h3>Emeka</h3>

            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
            </a>
          </div>

          <div className='one'>
            <img src={shewanda} alt='shewanda' />
            <h3>Shewanda</h3>
            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
            </a>
          </div>

          <div className='one'>
            <img src={shewanda2} alt='algorithm' />
            <h3>Algorithm</h3>
            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default Family;
