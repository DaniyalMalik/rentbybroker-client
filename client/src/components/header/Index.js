import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export function Index() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
