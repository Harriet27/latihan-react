import React, { useEffect } from 'react';
import './Welcome.css';

const Welcome = () => {
  useEffect(() => {
    document.title = 'Welcome';
  });

  return (
    <div className="container" style={{display:"flex", justifyContent:"center"}}>
      <div style={{flexDirection:"column", textAlign:"center"}}>
        <div style={{marginTop: "15px"}}>
          <a href='/test1'>
            <input type='button' value='Go to 1st Test' className="navBtn" />
          </a>
        </div>
        <div>
          <a href='/test2'>
            <input type='button' value='Go to 2nd Test' className="navBtn" />
          </a>
        </div>
        <div>
          <a href='/test3'>
            <input type='button' value='Go to 3rd Test' className="navBtn" />
          </a>
        </div>
        <div>
          <a href='/test4'>
            <input type='button' value='Go to 4th Test' className="navBtn" />
          </a>
        </div>
        <div>
          <a href='/test-otp'>
            <input type='button' value='Go to OTP Test' className="navBtn" />
          </a>
        </div>
        <div>
          <a href='/test-leaflet'>
            <input type='button' value='Go to Leaflet Test' className="navBtn" />
          </a>
        </div>
        <div>
          <a href='/geojson'>
            <input type='button' value='Go to Geojson' className="navBtn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
