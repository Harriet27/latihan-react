import React, { useEffect } from 'react';

const Welcome = () => {
  useEffect(() => {
    document.title = 'Welcome';
  });

  return (
    <div>
      Welcome to basic react tests
      <div className='d-flex'>
        <a href='/test1'>
          <input type='button' value='Go to 1st Test' />
        </a>
      </div>
      <div className='d-flex'>
        <a href='/test2'>
          <input type='button' value='Go to 2nd Test' />
        </a>
      </div>
      <div className='d-flex'>
        <a href='/test3'>
          <input type='button' value='Go to 3rd Test' />
        </a>
      </div>
      <div className='d-flex'>
        <a href='/test4'>
          <input type='button' value='Go to 4th Test' />
        </a>
      </div>
      <div className='d-flex'>
        <a href='/test-otp'>
          <input type='button' value='Go to OTP Test' />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
