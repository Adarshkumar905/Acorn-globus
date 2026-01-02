import { Search, Plus, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 px-10 flex items-center justify-between">

      {/* Search */}
      <div className="relative w-[460px]">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          placeholder='Try searching "insights"'
          className="w-full h-10 pl-10 rounded-full bg-[#FFFFFF] text-[13px] font-medium outline-none border border-transparent focus:border-gray-200"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Rounded container (Menu + Avatar) */}
        <div className="flex items-center gap-3 bg-[#FFFFFF] p-1.5 rounded-full border border-gray-100">

          {/* Menu icon - BLACK */}
          <Menu className="text-black cursor-pointer" size={18} />

          {/* Avatar */}
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src="/Profile.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Plus button */}
        <div className="w-9 h-9 rounded-full bg-[#E91E63] flex items-center justify-center text-white shadow-lg shadow-pink-200 cursor-pointer">
          <Plus size={18} />
        </div>

      </div>
    </header>
  );
}
