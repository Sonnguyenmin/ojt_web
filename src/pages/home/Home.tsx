import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './home.scss';
import { Outlet } from 'react-router-dom';
export default function Home() {
  return (
    <div id="home_page">
      <Header></Header>
      <div className="home_page_container">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
