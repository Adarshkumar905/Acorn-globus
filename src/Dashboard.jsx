import { Dribbble,Download, Share, ChevronDown } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import UserBar from "./components/UserBar";
import SalesChart from "./components/SalesChart";
import PlatformChart from "./components/PlatformChart";

export default function Dashboard() {
  return (
    <div className="flex h-full  bg-[#F4F2F1]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 bg-white rounded-[2.5rem] overflow-hidden flex flex-col shadow-sm">
          <div className="flex-1 overflow-y-auto px-10 pb-10 space-y-8 hide-scrollbar">

            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-gray-300 shadow-sm">
                  <span className="text-black text-xl font-medium">+</span>
                </div>

                <div className="flex items-center gap-2">
                  {[
                    { name: "Armin A.", img: "/Armin.png" },
                    { name: "Eren Y.", img: "/Eren.png" },
                    { name: "Mikasa A.", img: "/Mikasa.png" },
                    { isCircle: true },
                  ].map((u, i) =>
                    u.isCircle ? (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                          <span className="text-xs font-bold text-white">C</span>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-300 text-sm font-medium"
                      >
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                          <img src={u.img} className="w-full h-full object-cover" />
                        </div>
                        <span>{u.name}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                  <img src="/icon.png" className="w-[18px] h-[18px]" />
                </div>
                <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                  <Download size={18} className="text-gray-700" />
                </div>
                <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                  <Share size={18} className="text-gray-700" />
                </div>
              </div>
            </div>

            {/* TITLE + TIMEFRAME */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-300 tracking-wide">
                New report
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500">
                  <div className="w-9 h-5 bg-black rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5" />
                  </div>
                  Timeframe
                </div>

                <div className="px-3 py-1.5 bg-gray-100 rounded-full text-[12px] font-medium flex items-center gap-1">
                  Sep 1 – Nov 30, 2023
                  <ChevronDown size={13} />
                </div>
              </div>
            </div>

            <StatCard />
            <UserBar />

            {/* ================= LOWER SECTION (50 / 50) ================= */}
            <div className="grid grid-cols-12 gap-6 pt-2">

              {/* LEFT 50% */}
              <div className="col-span-6 space-y-6">

                {/* TWO SMALL CARDS */}
                <div className="grid grid-cols-2 gap-6">

                  {/* REFERRER LIST */}
                  <div className="bg-[#F5F5F5] rounded-xl p-4">
                    <div className="flex justify-between mb-3">
                    <img
                      src="/icon1.png" alt="menu"
                      className="w-4 h-4 "
                    />
                    <ChevronDown className="w-3 h-3 mr-25"  />
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs border border-gray-300 text-black">
                     <span>Filters</span>
                     <img
                          src="/filter.jpg"
                          alt="filter"
                         className="w-3.5 h-3.5"
                       />
  
                       </div>
                    </div>

                    {[
  { name: "Dribbble", value: "$227,459", percent: "43%" },
  { name: "Instagram", value: "$142,823", percent: "27%" },
  { name: "Behance", value: "$89,935", percent: "11%" },
  { name: "Google", value: "$37,028", percent: "7%" },
].map((i, k) => (
  <div
    key={k}
    className="flex justify-between items-center bg-white rounded-lg px-3 py-2 mb-2 text-sm"
  >
    {/* LEFT : ICON + NAME */}
    <div className="flex items-center gap-2 text-gray-500">
      {i.name === "Dribbble" && (
        <Dribbble className="w-4 h-4 text-[#E11D48]" />
      )}
      {i.name === "Instagram" && (
         <img src="/instagram.png" className="w-4 h-4" />
      )}
      {i.name === "Behance" && (
        <img src="/behance.jpg" className="w-4 h-4" />
      )}
      {i.name === "Google" && (
        <img src="/google.png" className="w-4 h-4" />
      )}

      <span className="text-[12px] text-gray-700 ">{i.name}</span>
    </div>

    {/* RIGHT : VALUE + PERCENT */}
    <div className="flex items-center text-right gap-2 text-[11px]">
      <span className="font-bold text-gray-900">
        {i.value}
      </span>
      <span className="bg-gray-200 px-1.5 py-0.5 rounded-full text-[10px] text-gray-900">
        {i.percent}
      </span>
    </div>
  </div>
))}

                  </div>

                  {/* REFERRER BARS */}
                  <div className="bg-[#F5F5F5] rounded-xl p-4">
                    <div className="flex justify-between mb-3">
                    <img
                      src="/icon2.svg" alt="menu"
                      className="w-4 h-4 "
                    />
                     <ChevronDown className="w-3 h-3 mr-25"  />
                     <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs border border-gray-300 text-black">
                     <span>Filters</span>
                     <img
                          src="/filter.jpg"
                          alt="filter"
                         className="w-3.5 h-3.5"
                       />
  
                       </div>

                    </div>

                    <div className="flex items-end justify-between h-[120px] px-3">

  {[
    { height: 60, img: "/behance.jpg" },
    { height: 95, img: "/dribbble.png" },
    { height: 45, img: "/google.png" },
    { height: 35, img: "/instagram.png" },
    { height: 80, img: "/bag.png" }, // last one (striped)
  ].map((bar, i) => (
    <div
      key={i}
      className={`relative w-7 rounded-lg flex justify-center
        ${
          i === 4
            ? "bg-[repeating-linear-gradient(135deg,#e5e5e5_0,#e5e5e5_5px,#f5f5f5_5px,#f5f5f5_10px)]"
            : "bg-white"
        }
      `}
      style={{ height: `${bar.height}px` }}
    >
      {/* ICON INSIDE BAR */}
      <img
        src={bar.img}
        alt="icon"
        className="absolute top-2 w-4 h-4"
      />
    </div>
  ))}

</div>


                    <p className="mt-3 text-xs text-gray-600">
                      Deals amount 
                      <div className="flex items-center gap-1 text-xs font-semibold text-black">
                       by referrer category
                      <ChevronDown className="w-3 h-3 text-gray-500" />
                     </div>
                    </p>
                  </div>
                </div>

                {/* PLATFORM CHART */}
                <PlatformChart />
              </div>

              {/* RIGHT 50% */}
              <div className="col-span-6 h-[550px]">
                <SalesChart />
              </div>

            </div>
            {/* ================= END LOWER SECTION ================= */}

          </div>
        </div>
      </div>
    </div>
  );
}
