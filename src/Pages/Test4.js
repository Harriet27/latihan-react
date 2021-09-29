import React, { useState } from 'react';
import { Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Test4 = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Input id="Popover1" placeholder="text here" />
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
      <div className='d-flex'>
        <a href='/'>
          <input type='button' value='Back to Home' />
        </a>
      </div>
    </div>
  );
};

export default Test4;
