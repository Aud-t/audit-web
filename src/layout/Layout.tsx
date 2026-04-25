import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Category from '../components/Category';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center w-full overflow-x-auto">
      <div className="bg-[#f8f9fa] w-[1440px] relative shadow-xl shrink-0 flex flex-col">
        <Header />
        <Category />
        <main className="flex-1 min-h-[1500px] pt-[300px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
