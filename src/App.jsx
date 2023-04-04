import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <div>
          <Header></Header>
          <div className='min-h-[calc(100vh-136px)]'>
          <Outlet></Outlet>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>
    </div>
  );
};

export default App;