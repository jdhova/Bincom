import React, { Fragment } from 'react';
import rental from '../images/rental.png';
import bincom from '../images/Bincom.png';
import algorithm from '../images/algorithm.png';

const Projects = () => {
  return (
    <Fragment>
      <div className='main-project'>
        <div className='project1'>
          <h2>Take a look at some of my projects</h2>
        </div>
        <div class='project2'>
          <div className='one'>
            <img src={bincom} alt='bincom' />
            <h3>Bincom</h3>

            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>

          <div className='one'>
            <img src={rental} alt='rental' />
            <h3>Rental</h3>

            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>

          <div className='one'>
            <img src={algorithm} alt='algorithm' />
            <h3>Algorithm</h3>
            <a href='/https://github.com/jdhova/home-rental'>
              {' '}
              <i className='fa fa-github fa-2x' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default Projects;
