import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
// import Footer from '../footer/Footer';

export function Index() {
  return (
    <>
      <NavBar />
      {/* <Footer /> */}
      <Outlet />
    </>
  );
}
