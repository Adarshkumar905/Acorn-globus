import {
    Clock,
    MessageSquare,
    Settings,
    FileText,
    ChevronUp,
    ChevronDown, 
  } from "lucide-react";
  
  function IconButton({ children, active }) {
    return (
      <div
        className={`w-11 h-11 flex items-center justify-center rounded-full cursor-pointer border transition
          ${
            active
              ? "bg-[#E91E63] text-white border-transparent shadow"
              : "bg-white text-gray-500 border-gray-100 hover:border-gray-300"
          }`}
      >
        {children}
      </div>
    );
  }
  
  function Badge({ value }) {
    return (
      <span className="ml-auto bg-[#E91E63] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
        {value}
      </span>
    );
  }
  
  export default function Sidebar() {
    return (
      <aside className="w-[280px] p-6 flex gap-4 bg-[#F7F3F1] items-start ">
  
        {/* ICON RAIL */}
        <div className="flex flex-col items-center gap-4 h-full">
          <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
            C
          </div>
  
          <IconButton><img src="circledots.webp" className="w=4 h=4"/></IconButton>
          <IconButton active><FileText size={18} /></IconButton>
          <IconButton ><img src="file.jpg" className=" rounded-full w=2px h=2px overflow-hidden"/></IconButton>
          <IconButton><img src="systemkey.png" className=" rounded-full w=2px h=2px overflow-hidden"/></IconButton>
          <IconButton><img src="squareoverlap.jpeg" className="w-7 h-7 object-cover overflow-hidden" /></IconButton>
  
          <div className="mt-auto flex flex-col gap-4">
            <IconButton><MessageSquare size={18} /></IconButton>
            <IconButton><Settings size={18} /></IconButton>
          </div>
        </div>

        {/* TEXT TREE */}
        <div className="flex-1 text-[13px] text-gray-700 h-[70vh]">
  
          {/* TITLE */}
          <div className="flex items-center justify-between font-bold mb-1">
          <div className="flex items-center justify-between font-semibold cursor-pointer">
           <span>codename.com</span>
             <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
          </div>
          </div>
  
          {/* MAIN LINKS */}
          <div className="space-y-1 mb-1">
            <div className="flex items-center gap-1 text-gray-400 hover:text-black cursor-pointer">
              ★ Starred
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:text-black cursor-pointer">
              ⟳ Recent
            </div>
            <div className="font-semibold text-black">Sales list</div>
            <div className="font-semibold text-black">Goals</div>
          </div>
  
          {/* DASHBOARD TREE */}
          <div className="mb-1">
            <div className="flex items-center font-bold text-black mb-1">
              Dashboard
              <span className="ml-auto text-gray-400 w-4 h-4 rounded-full bg-white flex items-center justify-center">＋</span>
            </div>
  
            <div className="ml-3 pl-3 border-l border-gray-300 space-y-1">
              <div className="text-black font-medium font-semibold">Codename</div>
              <div className="text-gray-800 font-semibold">Shared with me</div>
              <div className="ml-3 pl-3 border-l border-gray-200 space-y-1">
                <div className="flex items-center font-semibold">
                  Cargo2go
                </div>
  
                <div className="flex items-center font-semibold">
                  Cloudz3r
                  <Badge value={2} />
                </div>
                <div className="font-semibold">Idioma</div>
                <div className="font-semibold"> Syllables</div>
                <div className="font-semibold">x-0b</div>
              </div>
            </div>
          </div>
  
          {/* REPORTS TREE */}
          <div className="mb-3">
            <div className="flex items-center font-bold text-black mb-1">
              Reports
              <span className="ml-auto text-gray-400 w-4 h-4 rounded-full bg-white flex items-center justify-center">＋</span>
            </div>
  
                 <div className="ml-3 pl-3 border-l border-gray-300 space-y-1 font-semibold ">
                 <div className="flex items-center justify-between w-full text-gray-700 font-semibold cursor-pointer">
                      <span>Share with me</span>
                     <ChevronUp className="w-3 h-3 text-gray-500" />
                  </div>

              
              
  
              <div className="ml-3 pl-3 border-l border-gray-200 space-y-1">
                <div>Deals by user</div>
                <div>Deal duration</div>
              </div>
  
             
              <div className="flex items-center justify-between w-full text-gray-700 font-semibold cursor-pointer">
                      <span>My reports</span>
                     <ChevronUp className="w-3 h-3 text-gray-500" />
                  </div>
  
              <div className="ml-3 pl-3 border-l border-gray-200 space-y-1">
                <div>Emails received</div>
                <div>Deal duration</div>
                <div className="text-[#E91E63] font-semibold">
                  New report
                </div>
                <div className="flex items-center">
                  Analytics
                  <Badge value={7} />
                </div>
              </div>
            </div>
          </div>
  
          {/* FOOTER */}
          <div className="flex items-center gap-2 text-gray-400 cursor-pointer mt-1">
            <FileText size={14} />
            <span>Manage folders</span>
          </div>
  </div>
      </aside>
    );
  }
  