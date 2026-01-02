import {
    ArrowUpRight,
    ChevronUp,
  } from "lucide-react";
  import { Dribbble, Instagram, Chrome, User } from "lucide-react";
  
  export default function SalesChart() {
    return (
      <div className="bg-[#F5F5F5] rounded-2xl p-4 flex flex-col gap-3 h-full overflow-hidden">
  
        {/* HEADER */}
        <div className="flex text-[12px] text-gray-400 font-medium">
          <div className="w-[25%]">Sales</div>
          <div className="w-[25%]">Revenue</div>
          <div className="w-[22%]">Leads</div>
          <div className="w-[21%]">KPI</div>
          <div className="w-[17%]">W/L</div>
        </div>
  
        {/* ARMIN */}
        <div className="flex items-center text-[11px] bg-grey rounded-full px-6 py-1 border border-gray-300">
          <div className="w-[24%] flex items-center font-semibold gap-2 -ml-4">
            <img src="/Armin.png" className="w-6 h-6 inline-block rounded-full" />
            Armin A.
          </div>
          <div className="w-[25%] font-semibold">$209,633</div>
          <div className="w-[22%] flex gap-1 font-semibold">
            <span className="px-2 rounded-full bg-black text-white text-[11px]">41</span>
            <span className="px-2 rounded-full bg-gray-200 text-gray text-[11px]">118</span>
          </div>
          <div className="w-[16%] font-semibold">0.84</div>
          <div className="w-[16%] flex gap-1 font-semibold -ml-3">
            <span>31%</span>
            <span className="px-2 rounded-full bg-black text-white text-[11px]">12</span>
            <span className="px-2 rounded-full bg-gray-200 text-gray text-[11px]">29</span>
          </div>
        </div>
  
        {/* MIKASA */}
        <div className="bg-gradient-to-r from-[#F2F7FF] to-[#FFEFF4] rounded-2xl p-4 flex flex-col gap-2">
  
          <div className="flex items-center text-[11px]">
            <div className="w-[24%] flex items-center font-semibold gap-2 -ml-2">
              <img src="/Mikasa.png" className="w-6 h-6 rounded-full" />
              Mikasa A.
            </div>
            <div className="w-[23%] font-semibold">$156,841</div>
            <div className="w-[22%] flex gap-1">
              <span className="px-2 rounded-full bg-black text-white text-[11px]">54</span>
              <span className="px-2 rounded-full bg-gray-200 text-[11px]">103</span>
            </div>
            <div className="w-[16%] font-semibold -ml-1">0.89</div>
            <div className="w-[16%] flex items-center font-semibold gap-1 -ml-5">
              <span>39%</span>
              <span className="px-2 rounded-full bg-black text-white text-[10px]">21</span>
              <span className="px-2 rounded-full bg-gray-200 text-gray text-[11px]">33</span>
              <div className=" w-4 h-4 rounded-full bg-[#E11D48] flex items-center justify-center">
                <ChevronUp className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
  
          {/* TAGS */}
          <div className="flex gap-2 text-[12px]">
            <span className="bg-white px-2 py-1 rounded-full font-semibold">Top sales 💪</span>
            <span className="bg-white px-2 py-1 rounded-full font-semibold">Sales streak 🔥</span>
            <span className="bg-white px-2 py-1 rounded-full font-semibold">Top review 👍</span>
          </div>
  
          {/* WORK WITH PLATFORMS */}
          <div className="text-[13px] font-semibold">Work with platforms</div>
  
          <div className="grid grid-cols-2 gap-2">
  
            {/* DRIBBBLE */}
          <div className="bg-white rounded-xl p-3 flex flex-col gap-2 max-h-[145px]">
             {/* icon + name */}
            <div className="flex items-center gap-2">
            <Dribbble className="w-6 h-6 text-[#E11D48]" />
               <span className="text-[13px] font-semibold">Dribbble</span>
             </div>

               {/* percent + amount (SAME LINE) */}
           <div className="flex gap-3 mt-15">
             <span className="text-[22px] font-bold">45.3%</span>
             <span className="text-[22px] text-gray-300 font-semibold">
                       $71,048
                </span>
             </div>
          </div>

            {/* RIGHT STACK */}
           <div className="flex gap-1">
       {/* Instagram*/}
                <div className="w-[200px] h-[105px] bg-white rounded-xl p-3 flex flex-col justify-between">
                 <div className="flex items-center gap-1">
                  <img src="instagram.png" className="w-4 h-4" alt="instagram" />
                    <span className="text-[12px] font-medium">Instagram</span>
                   </div>

             <div className="flex justify-between items-end mt-9">
              <span className="text-[14px] font-bold -ml-1">28.1%</span>
              <span className="text-[12px] text-gray-300 font-semibold ml-2">$44,072</span>
             </div>
              </div>

             {/* RIGHT COLUMN (Google + Other) */}
              <div className="flex flex-col gap-1">

                 {/* Google — SMALL */}
           <div className="rounded-xl w-[92px] h-[63px] p-1 flex flex-col justify-between
            bg-[repeating-linear-gradient(135deg,#f3f3f3_0,#f3f3f3_6px,#ffffff_6px,#ffffff_12px)]"
            >
    <div className="flex items-center gap-1">
      <img src="google.png" className="w-4 h-4" alt="google" />
      <span className="text-[11px] font-bold">Google</span>
    </div>

    <div className="flex justify-between items-end mt-2">
      <span className="text-[10px] font-bold">14.1%</span>
      <span className="text-[11px] text-gray-300 font-bold">$22,114</span>
    </div>
  </div>

  {/* Other — THIN */}
  <div className="bg-white rounded-xl w-[92px] h-[35px] px-2 py-1.5 flex items-center justify-between">
    <div className="flex items-center gap-1.5">
          <img src="dots.png" className="w-4 h-4" alt="dots" />
      </div>

          <div className="flex gap-1 items-center">
          <span className="text-[11px] font-bold">5.4%</span>
          <span className="text-[11px] text-gray-300">$8469</span>
         </div>
      </div>
      <div className="bg-white rounded-xl w-[214px] h-[35px] px-2 -ml-30 mt-1 flex gap-1 items-center">
      <div className="flex items-center gap-1">
         <img src="bag.png" className="w-4 h-4" alt="bag" />
         <span className="text-[12px] font-bold">Other</span>
      </div>
          <span className="text-[11px] font-bold ml-18">7.1%</span>
          <span className="text-[11px] text-gray-300">$11,135</span>
         </div>
    </div>
  </div>
  </div>
  
          {/* SALES DYNAMIC */}
           <div className="bg-[#FFF6F2] rounded-2xl ">

          {/* HEADER */}
<             div className="flex justify-between items-center text-[13px] font-semibold mb-2">
  <span>Sales dynamic</span>
  <ArrowUpRight className="w-4 h-4" />
</div>

{/* WEEK LABELS */}
<div className="flex justify-between text-[9px] text-gray-400 px-1 mb-1">
  <span>W1</span>
  <span>W3</span>
  <span>W5</span>
  <span>W7</span>
  <span>W9</span>
  <span>W11</span>
</div>

{/* GRAPH AREA */}
<div className="relative h-[110px]">


  {/* DOTTED BACKGROUND LINE */}
  <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
    <polyline
      fill="none"
      stroke="#E5B9A8"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      points="-40,58
      0,34
      20,46
      40,52
      60,45
      80,53
      100,56
      120,52
      140,55
      160,42
      180,34
      200,53
      220,35
      240,52
      260,34
      280,42
      300,35
      330,43"
      
    />
  </svg>
  {/* VERTICAL DOTTED WEEK LINES */}
<svg
  viewBox="5 5 300 130"
  className="absolute inset-0 w-full h-full pointer-events-none"
>
  {[0, 90, 180, 270, 360].map((x) => (
    <line
      key={x}
      x1={x}
      y1="0"
      x2={x}
      y2="90"
      stroke="#cbd5e1"
      strokeWidth="1.5"
      strokeDasharray="2 6"
    />
  ))}
</svg>

  {/* MAIN RED LINE */}
  <svg viewBox="0 0 300 100" className="absolute inset-0 w-full h-full">
    <polyline
      fill="none"
      stroke="#E11D48"
      strokeWidth="1.5"
      points="-40,64
      0,46
      20,55
      40,40
      60,53
      80,47
      100,52
      120,40
      140,54
      160,40
      180,53
      200,47
      220,52
      240,40
      260,44
      280,40
      300,53
      330,40
    "
      
    />
  </svg>

  {/* BOTTOM TIMELINE */}
  <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-1">

    {/* COLOR BARS */}
    <div className="absolute inset-x-0 bottom-2 flex space-x-1">
        <div className="h-[4px] w-[35%] rounded-full" 
             style={{
             background: 'linear-gradient(to right, #ef4444, #f97316, #22c55e)'
              }} />
         <div className="h-[4px] w-[35%] rounded-full" 
             style={{
             background: 'linear-gradient(to right, #4ade80, #16a34a, #166534)'
            }} />

         <div className="h-[4px] w-[30%] rounded-full" 
              style={{
              background: 'linear-gradient(to right, #fb923c, #dc2626, #22c55e, #15803d)'
              }} />
              </div>

    {/* ICON MARKERS */}
    <div className="relative z-10 flex justify-between w-full px-4">
      <div className="bg-white rounded-full p-1 shadow">
        <img src="/behance.jpg" className="w-3 h-3" />
      </div>

      <div className="bg-white rounded-full p-1 shadow">
        <Dribbble className="w-3 h-3 text-[#E11D48]" />
      </div>

      <div className="bg-white rounded-full p-1 shadow">
        <img src="/Mikasa.png" className="w-3 h-3 rounded-full" />
      </div>
    </div>

  </div>
  
         </div>
     </div>
{/* EREN Y */}
<div className="flex items-center text-[11px] bg-white rounded-full px-6 py-1 -mt-2 border border-gray-300">
          <div className="w-[24%] flex items-center font-semibold gap-2 -ml-4">
            <img src="/Eren.png" className="w-6 h-6 inline-block rounded-full" />
            Eren Y.
          </div>
          <div className="w-[25%] font-semibold">$117,115</div>
          <div className="w-[22%] flex gap-1 font-semibold">
            <span className="px-2 rounded-full bg-black text-white text-[11px]">22</span>
            <span className="px-2 rounded-full bg-gray-200 text-gray text-[11px]">84</span>
          </div>
          <div className="w-[16%] font-semibold">0.79</div>
          <div className="w-[16%] flex gap-1 font-semibold -ml-3">
            <span>32%</span>
            <span className="px-2 rounded-full bg-black text-white text-[11px]">7</span>
            <span className="px-2 rounded-full bg-gray-200 text-gray text-[11px]">15</span>
          </div>
        </div>
</div>
</div>
);
}
  