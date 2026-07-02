import React from 'react';

export default function TopSelling() {
  const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=300",
      alt: "Potted Indoor Foliage"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=300",
      alt: "Lush Green Shrub",
      hasBadges: true // Marks the center element with colored identity rounds from layout
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JhbmdlJTIwVGVycmFjb3R0YSUyMENhY3R1c3xlbnwwfHwwfHx8MA%3D%3D", 
    alt: "Orange Terracotta Cactus"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 md:px-14 py-16 relative z-20">
      
      {/* --- TITLE BLOCK --- */}
      <div className="flex justify-center items-center mb-16">
        <div className="relative flex items-center justify-center">
          <span className="text-[#a2b4a7] font-light text-2xl px-2 select-none">[</span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-white text-center px-1">
            Our Top Selling Plants
          </h2>
          <span className="text-[#a2b4a7] font-light text-2xl px-2 select-none">]</span>
        </div>
      </div>

      {/* --- ARCHED CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="relative bg-white/[0.02] border border-white/[0.05] rounded-t-[120px] rounded-b-3xl pt-12 pb-6 px-6 flex flex-col items-center justify-between h-[360px] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group"
          >
            {/* Plant Image Centered */}
            <div className="w-full flex-1 flex items-center justify-center relative">
              <img 
                src={item.img} 
                alt={item.alt} 
                className="max-h-56 object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
            </div>

            {/* Conditional 'G S T' Overlapping Badges on Center Item */}
            {item.hasBadges && (
              <div className="absolute bottom-6 bg-[#161c18]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-1.5 shadow-xl">
                <span className="w-6 h-6 rounded-full bg-[#005a36] text-white flex items-center justify-center text-[11px] font-bold">G</span>
                <span className="w-6 h-6 rounded-full bg-[#6a25a3] text-white flex items-center justify-center text-[11px] font-bold">S</span>
                <span className="w-6 h-6 rounded-full bg-[#e64a19] text-white flex items-center justify-center text-[11px] font-bold">T</span>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}