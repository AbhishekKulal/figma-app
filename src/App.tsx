import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import WhyChooseUs from './components/sections/WhyChooseUs';
import WorkspaceGrid from './components/sections/WorkspaceGrid';
import Downloads from './components/sections/Downloads';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhyChooseUs/>
      <WorkspaceGrid/>
      <Downloads/>
      <Footer/>
    </div>
  );
}

export default App;
