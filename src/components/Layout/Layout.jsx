import React from 'react'
import style from './Layout.module.css' 
import Nav from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
    <>
      <Nav />
      <div >
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
