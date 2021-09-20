import React, { useState, useEffect } from 'react';

const Test1 = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = 'Test 1';
  });

  const handleClick = () => {
    setMessage('Hello World!');
  };

  return (
    <div>
      <div className='d-flex'>
        ini test 1
      </div>
      <input type='button' value='Click Me' onClick={handleClick} />
      <div>
        {message}
      </div>
      <div className='d-flex'>
        <a href='/'>
          <input type='button' value='Back to Home' />
        </a>
      </div>
    </div>
  );
};

export default Test1;
