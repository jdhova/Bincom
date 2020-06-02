import React, { Fragment } from 'react';
import juud1 from '../images/Juud1.png';

const HomePage = () => {
  return (
    <Fragment>
      <div className='main-home'>
        <h1>Im Jude Okagu freelance React.js Developer </h1>
        <h1>based in Lagos Nigeria.</h1>
        <h4>
          I dont just design web and mobile apps, I bring innovatiive ideas to
          life.
        </h4>

        {/* <div className='home-2'>
          <img src={juud1} alt='/' />
        </div> */}
      </div>
    </Fragment>
  );
};

export default HomePage;
