import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-14 pt-8 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
      
      {/* --- LEFT TEXT CONTENT --- */}
      <div className="lg:col-span-7 space-y-6 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-white leading-none">
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

        {/* --- FLOATING TESTIMONIAL CARD (BOTTOM LEFT) --- */}
        <div className="pt-10 max-w-sm">
          <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                alt="Ronnie Hamill" 
                className="w-9 h-9 rounded-full object-cover border border-white/20"
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
            <p className="text-[11px] text-[#a2b4a7] leading-relaxed font-light">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>
      </div>

      {/* --- RIGHT DISPLAY FEATURE & FLOATING CARDS --- */}
      <div className="lg:col-span-5 relative flex justify-center items-center pt-12 lg:pt-0">
        
        {/* Background Bush Circular Frame */}
        <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1512428813833-df70f75a6e82?auto=format&fit=crop&q=80&w=500" 
            alt="Center Greenery" 
            className="w-full h-full object-cover rounded-full filter brightness-75 scale-95"
          />
          
          {/* Middle Overlap Badges (Small overlapping avatar indicator) */}
          <div className="absolute bottom-20 left-16 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-emerald-600 border border-black"></div>
            <div className="w-5 h-5 rounded-full bg-rose-600 border border-black -ml-2"></div>
            <span className="text-[10px] font-medium text-white pl-1">2</span>
          </div>
        </div>

        {/* --- MAIN GLASSMORPHIC PLANT CARD (FAR RIGHT) --- */}
        <div className="absolute top-0 right-0 md:-right-6 w-[260px] md:w-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-[32px] p-5 shadow-2xl flex flex-col justify-between group">
          
          {/* Isolated Plant Graphic Block */}
          <div className="relative bg-transparent rounded-2xl flex justify-center pt-2 pb-4">
            <img 
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400" 
              alt="Aglaonema Plant" 
              className="h-48 object-contain transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
            {/* Tiny Floating Avatars Stack Inside Card */}
            <div className="absolute top-12 right-2 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10 flex -space-x-1.5 z-20">
              <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
              <div className="w-4 h-4 rounded-full bg-amber-500"></div>
              <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
            </div>
          </div>

          {/* Plant Meta Details */}
          <div className="mt-2 space-y-3">
            <div>
              <span className="text-[11px] text-[#718779] uppercase tracking-wider font-medium block">Indoor Plant</span>
              <div className="flex items-center justify-between mt-0.5">
                <h3 className="text-lg font-light text-white tracking-wide">Aglaonema plant</h3>
                <span className="text-white opacity-60 text-sm font-light">➔</span>
              </div>
            </div>

            <button className="w-full border border-white/60 text-white bg-transparent py-2.5 rounded-xl text-xs font-light tracking-wide hover:bg-white hover:text-[#0a140e] transition-all duration-200">
              Buy Now
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 pt-1">
              <span className="w-4 h-[2px] bg-white rounded-full"></span>
              <span className="w-1.5 h-[2px] bg-white/30 rounded-full"></span>
              <span className="w-1.5 h-[2px] bg-white/30 rounded-full"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}