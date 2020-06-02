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
            <img src={rental} alt='/' />
          </div>

          <div className='one'>
            <img src={algorithm} alt='/' />
          </div>

          <div className='one'>
            <img src={bincom} alt='bincom' />
            <h3>bincom</h3>

            <a href='#'>Add to Cart</a>
          </div>

          <div className='one'>
            <img src={rental} alt='rental' />
            <h3>rental</h3>

            <a href='#'>Add to Cart</a>
          </div>

          <div className='one'>
            <img src={algorithm} alt='algorithm' />
            <h3>algorithm</h3>

            <a href='#'>Add to Cart</a>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default Projects;
