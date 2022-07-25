import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
