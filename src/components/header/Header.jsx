import React from 'react';
import Navbar from '../navbar/Navbar';
import SearchForm from '../searchform/SearchForm';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>
            Find your book of choice.
          </h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            Welcome to BookSpot, where you can find any book of your choice.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
