import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <ThreeDots color='purple' ariaLabel='Loading' />
    </div>
  );
};

export default Loader;
