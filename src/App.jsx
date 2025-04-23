import React from 'react';
import './styles/app.css';

// Import components
import Sidebar from './components/sidebar';
import Education from './components/education';
import Professional from './components/professional';
import Skills from './components/skills';
import Footer from './components/footer';
function App() {

  return (
    <>
      <div className='home'>
        <Sidebar />
        <Education />
        <div className='container'>
        <Professional />
        <Skills />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
