import {
    ChevronDown,
    ChevronRight,
    ArrowUp,
    Star
  } from "lucide-react";
  
  export default function StatCard() {
    return (
        
      <div className="w-full">
  
        <div className="flex items-end justify-between gap-4">
  
          {/* LEFT : REVENUE */}
          <div>
            <p className="text-[13px] font-bold text-gray-400 mb-1">
              Revenue
            </p>
  
            <div className="flex items-baseline gap-2">
              <span className="text-[34px] font-black text-gray-900 leading-none">
                $528,976
              </span>
  
              <span className="text-[26px] font-black text-gray-300 leading-none -ml-1.5">
                .82
              </span>
  
              {/* 7.9% */}
              <span className="flex items-center gap-1 bg-[#E11D48] text-white text-[11px] font-bold px-2 py-1 rounded-full leading-none">
                <ArrowUp size={12} />
                7.9%
              </span>
  
              {/* $27,335.09 */}
              <span className="bg-[#E11D48] text-white text-[11px] font-bold px-2 py-1 rounded-full leading-none">
                $27,335<span className="text-white/60">.09</span>
              </span>
            </div>
  
            {/* VS PREV */}
            <div className="flex items-center gap-2 text-[12px] font-medium text-gray-600 mt-2">
              <span>vs prev. $501,641.73</span>
              <span>Jun 1 – Aug 31, 2023</span>
              <ChevronDown size={13} />
            </div>
          </div>
  
          {/* RIGHT : COMPACT CARDS */}
          <div className="flex items-stretch gap-3">
  
            {/* TOP SALES */}
            <div className="bg-white rounded-xl px-3 py-2 min-w-[140px] shadow-lg">
              <p className="text-[12px] text-gray-400">Top sales</p>
              <p className="text-[18px] font-bold">72</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <img
                    src="/Mikasa.png"
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-[12px] text-gray-600">
                    Mikasa
                  </span>
                </div>
                <ChevronRight size={14} />
              </div>
            </div>
  
            {/* BEST DEAL */}
            <div className="bg-black text-white rounded-xl px-3 py-2 min-w-[140px] relative">
              <p className="text-[12px] opacity-60">Best deal</p>
              <p className="text-[18px] font-bold">$42,300</p>
              <div className="flex items-center justify-between mt-1">
  <p className="text-[12px] opacity-70">Rolf Inc.</p>

              {/* round icon button */}
              <div className="w-5 h-5 flex items-center justify-center rounded bg-white">
               <ChevronRight size={14} strokeWidth={2} className="text-black" />
               </div>
               </div>
              <Star size={13} className="absolute top-2 right-2 opacity-60" />
            </div>
  
            {/* DEALS */}
            <div className="bg-white rounded-xl px-3 py-2 text-center border border-gray-300 shadow-sm">
              <p className="text-[12px] text-gray-400">Deals</p>
              <div className="bg-gray-300 text-white rounded-full px-2 py-0.5 text-[12px] font-bold mt-1">
                256
              </div>
              <p className="text-[12px] mt-1">▼ 5</p>
            </div>
  
            {/* VALUE */}
            <div className="bg-white rounded-xl px-3 py-2 text-center border-2 border-[#E11D48] shadow-sm">
              <p className="text-[12px]">Value</p>
              <div className="bg-[#E11D48] text-white rounded-full px-2 py-0.5 text-[12px] font-bold mt-1">
                528k
              </div>
              <p className="text-[12px] mt-1">▲ 7.9%</p>
            </div>
  
            {/* WIN RATE */}
            <div className="bg-white rounded-xl px-3 py-2 text-center border border-gray-300 shadow-sm">
              <p className="text-[12px] text-gray-400">Win rate</p>
              <div className="bg-gray-300 text-white rounded-full px-2 py-0.5 text-[12px] font-bold mt-1">
                44%
              </div>
              <p className="text-[12px] mt-1">▲ 1.2%</p>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  