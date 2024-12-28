import React from 'react';
import Header from './components/sections/Header';
import Banner from './components/sections/Banner';
import WhyChooseUs from './components/sections/WhyChooseUs';
import WorkspaceGrid from './components/sections/WorkspaceGrid';
import Downloads from './components/sections/Downloads';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <WhyChooseUs/>
      <WorkspaceGrid/>
      <Downloads/>
      <Footer/>
    </div>
  );
}

export default App;
