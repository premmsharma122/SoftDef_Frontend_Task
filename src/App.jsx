import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSelling from './components/TopSelling';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050b07] text-[#e4ede7] font-sans antialiased relative overflow-x-hidden">
      
      {/* --- HIGH VISIBILITY BOTANICAL BACKGROUND IMAGE --- */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-no-repeat bg-top"
        style={{
          backgroundImage: `url('/src/assets/bg-tree.jpg')`,
          backgroundSize: '100% auto',
          // Drastically bumped opacity from 0.07 to 0.35 for high definition visibility
          opacity: '0.35', 
          // Removed the grey blend mode so rich organic greens pop out natively
          mixBlendMode: 'normal', 
          // Dropped the blur down from 4px to a razor-sharp 1px
          filter: 'blur(1px) brightness(0.65)' 
        }}
      />

      {/* Radial lighting layer to make text readable over the background tree */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, transparent 20%, rgba(5,11,7,0.85) 70%)'
        }}
      />

      {/* Vivid Emerald Glowing Accent Accents */}
      <div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(20,60,35,0.6) 0%, rgba(5,11,7,0) 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* --- CONTENT INTERFACE LAYERS --- */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrendyPlants />
        <TopSelling />
      </div>
    </div>
  );
}

