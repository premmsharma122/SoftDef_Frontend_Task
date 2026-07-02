import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-14 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
      
      {/* --- LEFT TEXT CONTENT --- */}
      <div className="lg:col-span-7 space-y-6 pt-6">
        <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-white leading-none">
          Earth’s Exhale
        </h1>
        
        <p className="text-[#a2b4a7] max-w-xl text-sm md:text-base leading-relaxed tracking-wide font-light">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural 
          environment and its essential role in sustaining life.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-5 pt-2">
          <button className="border border-white/80 text-white bg-transparent px-8 py-3 rounded-full text-sm font-light tracking-wide hover:bg-white hover:text-[#0a140e] transition-all duration-300">
            Buy Now
          </button>
          
          <button className="flex items-center gap-3 text-white text-sm font-light tracking-wide group">
            <span className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
              <Play size={14} fill="currentColor" className="ml-0.5" />
            </span>
            <span className="font-whimsical text-base">Live Demo...</span>
          </button>
        </div>

        {/* Floating Testimonial snippet inside layout */}
        <div className="pt-12 max-w-xs">
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-2xl p-5 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                alt="Ronnie Hamill" 
                className="w-9 h-9 rounded-full object-cover border border-white/10"
              />
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">Ronnie Hamill</h4>
                <div className="flex gap-0.5 text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[10px]">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-[#8fa395] leading-relaxed font-light">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>
      </div>

      {/* --- RIGHT PRODUCT STACK OVERLAY --- */}
      <div className="lg:col-span-5 relative flex justify-end items-start pt-12 lg:pt-0">
        
        {/* Main Floating Card Layout */}
        <div className="w-[280px] md:w-[300px] bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] rounded-[36px] p-5 shadow-2xl flex flex-col justify-between group relative">
          
          {/* Main Plant Asset Container */}
          <div className="relative bg-transparent rounded-2xl flex justify-center pt-2 pb-4">
            <img 
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400" 
              alt="Aglaonema Plant" 
              className="h-48 object-contain transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>

          {/* Plant Meta Description Details */}
          <div className="mt-2 space-y-3">
            <div>
              <span className="text-[11px] text-[#718779] uppercase tracking-wider font-medium block">Indoor Plant</span>
              <div className="flex items-center justify-between mt-0.5">
                <h3 className="text-base font-light text-white tracking-wide">Aglaonema plant</h3>
                <span className="text-white opacity-60 text-sm font-light">➔</span>
              </div>
            </div>

            <button className="w-full border border-white/40 text-white bg-transparent py-2.5 rounded-xl text-xs font-light tracking-wide hover:bg-white hover:text-[#0a140e] transition-all duration-200">
              Buy Now
            </button>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-1.5 pt-1">
              <span className="w-4 h-[2px] bg-white rounded-full"></span>
              <span className="w-1.5 h-[2px] bg-white/30 rounded-full"></span>
              <span className="w-1.5 h-[2px] bg-white/30 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* --- LARGE CIRCULAR FLOATING PROFILE BADGE LAYER --- */}
        {/* Floating directly near the top of the right stack card */}
        <div className="absolute -top-10 left-4 w-28 h-28 bg-neutral-900/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center p-1 shadow-2xl z-30">
          <div className="grid grid-cols-2 gap-1 rounded-full overflow-hidden w-full h-full relative">
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="u1" />
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="u2" />
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="u3" />
            <div className="bg-neutral-900 flex items-center justify-center text-xs font-bold text-white">T</div>
          </div>
        </div>

      </div>
    </section>
  );
}