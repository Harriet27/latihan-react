import React, { useState, useEffect } from 'react';

const Test1 = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    document.title = 'Test 2';
  });

  return (
    <div>
      <div className='d-flex'>
        ini test 2
      </div>
      <input type='button'
        value={hidden ? 'Show' : 'Hide'}
        onClick={() => setHidden(!hidden)}
      />
      <div>
        {!hidden ? 'Hello World!' : null}
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
