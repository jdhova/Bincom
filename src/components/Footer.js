import React from 'react';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='footer-2'>
        <h3>Let us bring your idea to life</h3>
        <p>
          Give us a call: +234 000 000 000 <br></br>
          Email support: info@unknown.ng<br></br>
          <span>&copy;2020</span>
        </p>
        <div className='font'>
          <i className='fa fa-instagram fa-2x' aria-hidden='true'></i>
          <i className='fa fa-twitter fa-2x' aria-hidden='true'></i>
          <i className='fa fa-facebook fa-2x' aria-hidden='true'></i>
        </div>
      </div>

      <div className='footer-3'>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
          <li>
            <a href=''>Family</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
