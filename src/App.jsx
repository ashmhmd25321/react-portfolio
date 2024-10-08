import React from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className=' bg-slate-950 overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900'>
      <div className='top-0 -z-10 h-full w-full'>

        <div className="relative h-screen w-ful">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          <div className="container mx-auto px-8  bg-slate-950">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>

      </div>

      </div>
    </div>
  );
}

export default App;
