import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a140e] text-[#e4ede7] font-sans antialiased relative overflow-x-hidden">
      {/* Global Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#163522] rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#122d1c] rounded-full blur-[160px] opacity-30 pointer-events-none" />

      <Navbar />
      <Hero />
    </div>
  );
}