import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Header />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
