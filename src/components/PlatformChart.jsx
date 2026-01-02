import { ChevronDown,Dribbble  } from "lucide-react";

export default function PlatformValueCard() {
    const months = [
        {
          name: "Sep",
          value: "$6,901",
          bars: [66, 40, 15],
          images: [
            "Armin.png",  
            "Mikasa.png",  
            "Eren.png",  
          ],
        },
        {
          name: "Oct",
          value: "$11,035",
          bars: [109, 78, 35],
          images: [
            "Armin.png",  
            "Mikasa.png",  
            "Eren.png",  
          ],
        },
        {
          name: "Nov",
          value: "$9,288",
          bars: [85, 47, 70],
          images: [
            "Armin.png",  
            "Mikasa.png",  
            "Eren.png",  
          ],
        },
      ];
      
  return (
    <div className="relative bg-[#F5F5F5] rounded-[26px] p-5 w-full">

      {/* ===== TOP ROW ===== */}
      <div className="flex items-center justify-between mb-4">

        {/* Left title */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7  flex items-center justify-center">
          <Dribbble className="w-8 h-8 text-[#E11D48]" />
          </div>
          <div>
            <p className="text-[12px] text-gray-400 font-medium">
              Platform value
            </p>
            <div className="flex items-center gap-1 text-[14px] font-bold">
              Dribbble <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Pills */}
        <div className="bg-white rounded-full p-1 flex gap-1">
          <div className="px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold">
            Revenue
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-100 text-black-200 text-[11px] font-semibold">
            Leads
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-100 text-black-200 text-[11px] font-semibold">
            W/L
          </div>
        </div>
      </div>

      {/* ===== BODY ===== */}
      <div className="flex gap-8 relative pl-[150px]">

        {/* ===== PINK PANEL ===== */}
        <div className="absolute -left-4 top-2 bg-[#E11D48] text-white rounded-tr-[22px] rounded-bl-[22px] w-[140px] px-4 py-5">

          {/* Vertical text */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 rotate-180 text-[14px] leading-none opacity-60 [writing-mode:vertical-rl] whitespace-nowrap">
            Average monthly
          </div>

          <div className="pl-5 space-y-4">
            <div>
              <p className="text-[12px] opacity-70">Revenue</p>
              <p className="text-[22px] font-bold">$18,552</p>
            </div>

            <div>
              <p className="text-[12px] opacity-70">Leads</p>
              <p className="text-[14px] font-bold">
                373 <span className="opacity-70">97/276</span>
              </p>
            </div>

            <div>
              <p className="text-[12px] opacity-70">Win/lose</p>
              <p className="text-[14px] font-bold">
                16% <span className="opacity-70">51/318</span>
              </p>
            </div>
          </div>
        </div>

        {/* ===== CHART AREA ===== */}
        <div className="flex-1 relative h-[190px]">

          {/* Grid + values */}
          <div className="absolute inset-0 flex flex-col gap-[28px] pt-[16px] pointer-events-none">
            {["14,500", "11,000", "7,500", "4,000"].map((v) => (
              <div key={v} className="flex items-center gap-3">
                <div className="flex-1 h-[1px] bg-white/70" />
                <span className="text-[11px] text-gray-300 font-semibold w-[50px] text-right">
                  ${v}
                </span>
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="flex items-end pt-[36px]">

            {months.map((m, i) => (
              <div key={i} className="flex flex-col items-center gap-2">

                {/* Value badge ABOVE striped bar */}
                <div
                  className="-ml-16 bg-[#E11D48] text-white text-[11px] font-semibold px-2 py-0.5 rounded-md z-20"
                  style={{ marginBottom: "5px" }}
                >
                  {m.value}
                </div>

                {/* Bars */}
                <div className="flex gap-1 items-end gap-[3px] z-10">
                  {[1, 2, 3].map((b) => (
                    <div
                      key={b}
                      className={`relative w-[21px] rounded-t-md ${
                        b === 1
                          ? "bg-[repeating-linear-gradient(135deg,#f5f5f5_0,#f5f5f5_4px,#e8e8e8_4px,#e8e8e8_8px)]"
                          : "bg-[#D9D9D9]"
                        } ${b === 3 ? "mr-4" : "mr-[2px]"}`}
                      style={{ height: `${m.bars[b - 1]}px` }}
                    >

                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                     <img
                           src={m.images[b - 1]}  // Get the specific image for this bar
                           alt="Avatar"
                            className="w-[13px] h-[13px] rounded-full object-cover border border-gray-400"
                        />
                      </div>
                    </div>
                  ))}
        
                </div>

                {/* Month */}
                <p className="text-[12px] text-gray-400 font-semibold mt-1">
                  {m.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
