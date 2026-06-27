// import React, { useState } from 'react';
// import { Search, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-transparent z-50 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
//         {/* --- LOGO --- */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           {/* Custom vector potted plant emoji match */}
//           <span className="text-2xl select-none">🪴</span>
//           <span className="text-xl font-bold tracking-tight text-white font-sans flex items-center">
//             FloraVision<span className="text-white">.</span>
//           </span>
//         </div>

//         {/* --- DESKTOP NAVIGATION LINKS --- */}
//         {/* Note: The design uses a unique whimsical script-style font variant */}
//         <div className="hidden md:flex items-center gap-10 text-[#ccdcd0] tracking-wide text-sm font-light">
//           <a href="#home" className="hover:text-white transition-colors duration-200">
//             Home
//           </a>
          
//           <div className="relative group cursor-pointer flex items-center gap-1 hover:text-white transition-colors duration-200">
//             <span>Plants Type</span>
//             <ChevronDown size={14} className="opacity-80 mt-0.5" />
//           </div>
          
//           <a href="#more" className="hover:text-white transition-colors duration-200">
//             More
//           </a>
          
//           <a href="#contact" className="hover:text-white transition-colors duration-200">
//             Contact
//           </a>
//         </div>

//         {/* --- ACTION BUTTONS & ICONS --- */}
//         <div className="hidden md:flex items-center gap-6 text-white/90">
//           <button className="hover:text-white transition-transform hover:scale-105 p-1">
//             <Search size={18} strokeWidth={2} />
//           </button>
          
//           <button className="hover:text-white transition-transform hover:scale-105 p-1">
//             <ShoppingBag size={18} strokeWidth={2} />
//           </button>

//           {/* Clean minimalist dual-line hamburger matching screenshot */}
//           <button className="flex flex-col gap-[5px] justify-center items-end group p-1.5 pl-3">
//             <span className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:w-5"></span>
//             <span className="w-4 h-[2px] bg-white rounded-full transition-all group-hover:w-6"></span>
//           </button>
//         </div>

//         {/* --- MOBILE TOGGLE --- */}
//         <div className="md:hidden flex items-center">
//           <button 
//             onClick={() => setIsOpen(!isOpen)} 
//             className="text-white focus:outline-none"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* --- MOBILE DROPDOWN --- */}
//       {isOpen && (
//         <div className="md:hidden absolute top-24 left-0 w-full bg-[#0a140e]/95 backdrop-blur-md border-b border-white/5 py-6 px-8 space-y-4 z-50 flex flex-col shadow-xl">
//           <a href="#home" onClick={() => setIsOpen(false)} className="text-[#ccdcd0] text-base hover:text-white">Home</a>
//           <a href="#plants" onClick={() => setIsOpen(false)} className="text-[#ccdcd0] text-base hover:text-white">Plants Type</a>
//           <a href="#more" onClick={() => setIsOpen(false)} className="text-[#ccdcd0] text-base hover:text-white">More</a>
//           <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#ccdcd0] text-base hover:text-white">Contact</a>
//           <div className="flex gap-6 pt-2 text-white">
//             <Search size={20} />
//             <ShoppingBag size={20} />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState } from 'react';
import { Search, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Injecting the whimsical font stylesheet dynamically */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        .font-whimsical {
          font-family: 'Architects Daughter', cursive, sans-serif;
        }
      `}</style>

      <nav className="w-full bg-transparent z-50">
        <div className="max-w-7xl mx-auto px-8 md:px-14 h-24 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-2xl select-none">🪴</span>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              FloraVision.
            </span>
          </div>

          {/* --- NAV LINKS WITH IDENTICAL GAPS --- */}
          {/* Using identical px/mx margins to guarantee pixel-perfect spacing */}
          <div className="hidden md:flex items-center text-white/90 font-whimsical tracking-wide text-[15px]">
            <a href="#home" className="px-6 hover:text-white/70 transition-colors">
              Home
            </a>
            
            <div className="px-6 flex items-center gap-1.5 cursor-pointer hover:text-white/70 transition-colors">
              <span>Plants Type</span>
              <ChevronDown size={12} className="mt-1" />
            </div>
            
            <a href="#more" className="px-6 hover:text-white/70 transition-colors">
              More
            </a>
            
            <a href="#contact" className="px-6 hover:text-white/70 transition-colors">
              Contact
            </a>
          </div>

          {/* --- ACTION ICONS --- */}
          <div className="hidden md:flex items-center gap-7 text-white/90">
            <button className="hover:opacity-70 transition-opacity p-1">
              <Search size={18} strokeWidth={2} />
            </button>
            
            <button className="hover:opacity-70 transition-opacity p-1">
              <ShoppingBag size={18} strokeWidth={2} />
            </button>

            {/* Clean minimalist dual-line hamburger matching screenshot */}
            <button className="flex flex-col gap-[5px] justify-center items-end p-1 pl-2">
              <span className="w-6 h-[2px] bg-white rounded-full"></span>
              <span className="w-4 h-[2px] bg-white rounded-full"></span>
            </button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-[#0a140e]/95 backdrop-blur-md border-b border-white/5 py-6 px-8 space-y-4 z-50 flex flex-col shadow-xl font-whimsical">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-white text-base">Home</a>
            <a href="#plants" onClick={() => setIsOpen(false)} className="text-white text-base">Plants Type</a>
            <a href="#more" onClick={() => setIsOpen(false)} className="text-white text-base">More</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-white text-base">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
}