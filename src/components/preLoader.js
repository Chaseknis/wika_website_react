import React, { useEffect } from 'react';
import './styles/preLoader.css';
import { preLoaderAnim } from '../animations';

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="text_container">
        <span>Trusted,</span>
        <span> Reliable,</span>
        <span> Affordable.</span>
      </div>
    </div>
  );
}

export default PreLoader;
