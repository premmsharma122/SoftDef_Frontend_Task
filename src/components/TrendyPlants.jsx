import React from "react";
import { ShoppingBag } from "lucide-react";

export default function TrendyPlants() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-14 py-12 relative z-20">
      {/* --- SECTION TITLE WITH BRACKET ACCENTS --- */}
      <div className="flex justify-center items-center mb-16">
        <div className="relative flex items-center justify-center">
          <span className="text-[#a2b4a7] font-light text-2xl px-2 select-none">
            [
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-white text-center px-1">
            Our Trendy plants
          </h2>
          <span className="text-[#a2b4a7] font-light text-2xl px-2 select-none">
            ]
          </span>
        </div>
      </div>

      {/* --- TRENDY CARDS STACK CONTAINER --- */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* CARD 1 (Desk Decoration - 599) */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-[48px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] relative group shadow-2xl">
          <div className="w-full md:w-[45%] flex justify-center relative md:-mt-16 md:-mb-16">
            <img
              src="https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400"
              alt="For Your Desks Decorations"
              className="w-64 h-64 md:w-72 md:h-72 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-[55%] space-y-4 text-left">
            <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white">
              For Your Desks Decorations
            </h3>
            <p className="text-xs md:text-sm text-[#a2b4a7] leading-relaxed font-light max-w-lg">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </p>
            <div className="text-lg font-medium text-white tracking-wide pt-2">
              Rs. 599/-
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="p-[2px] bg-[#1a7d43] rounded-xl flex items-center justify-center">
                <button className="bg-[#183524] text-white text-sm font-light tracking-wide px-8 py-2.5 rounded-[10px] hover:bg-[#1a442b] transition-colors">
                  Explore
                </button>
              </div>
              <button className="border border-white/40 p-2.5 rounded-xl text-white hover:bg-white/10 transition-all">
                <ShoppingBag size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 (Succulent Plant - 399 - Exactly as shaped in Screenshot 2026-07-02 085630.jpg) */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-[48px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] relative group shadow-2xl">
          {/* Details Content (Left Side on Card 2 Layout) */}
          <div className="w-full md:w-[55%] space-y-4 text-left order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white">
              For Your Desks Decorations
            </h3>

            <p className="text-[11px] md:text-xs text-[#a2b4a7] leading-relaxed font-light max-w-md">
              The greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming.
            </p>

            <div className="text-lg font-medium text-white tracking-wide pt-1">
              Rs. 399/-
            </div>

            {/* Flat Minimalist Actions matching the second variation */}
            <div className="flex items-center gap-4 pt-1">
              <button className="border border-white/60 text-white bg-transparent text-xs font-light tracking-wide px-8 py-2.5 rounded-xl hover:bg-white hover:text-[#0a140e] transition-all">
                Explore
              </button>

              <button className="border border-white/40 p-2.5 rounded-xl text-white hover:bg-white/10 transition-all">
                <ShoppingBag size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Succulent Right Align Spillover (Potted Minty Cup Pot) */}
          <div className="w-full md:w-[45%] flex justify-center relative md:-mt-16 md:-mb-16 order-1 md:order-2">
            <img
              src="https://media.istockphoto.com/id/1174814981/photo/succulent-in-a-concrete-pot-planter-with-haworthia-on-a-white-background-original-banner-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=EOUGE5PZ2r2sFqd_MItZwwNUqgskxCBlHlqpiy83cG4="
              alt="Succulent Desk Plant"
              className="w-56 h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
