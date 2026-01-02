export default function UserBar() {
    const users = [
      {
        value: "$209,633",
        percent: "39.63%",
        avatar:
          "Armin.png",
      },
      {
        value: "$156,841",
        percent: "29.65%",
        avatar:
          "Mikasa.png",
      },
      {
        value: "$117,115",
        percent: "22.14%",
        avatar:
          "Eren.png",
      },
    ];
  
    return (
      <div className="w-full flex items-center gap-2">
        
        {/* OUTER SOFT CONTAINER */}
        <div className="flex items-center flex-1 px-4 py-1 bg-[#F5F5F5] rounded-full">
  
          {/* 3 USER PILLS */}
          {users.map((u, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-1.5 bg-white rounded-full border border-gray-100
                ${i === 0 ? "basis-[50%]" : ""}
                ${i === 1 ? "basis-[40%]" : ""}
                ${i === 2 ? "basis-[30%]" : ""}
              `}
            >
              
              <div className="flex items-center gap-2">
                <img
                  src={u.avatar}
                  alt="user"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-[12px] font-bold text-gray-900">
                  {u.value}
                </span>
              </div>
  
             
              <span className="text-[11px] font-bold text-gray-400">
                {u.percent}
              </span>
            </div>
          ))}
  
          
          <div className="flex items-center justify-between px-3 py-1.5 basis-[28%]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                C
              </div>
              <span className="text-[12px] font-bold text-gray-900">
                $45,386
              </span>
            </div>
  
            <span className="text-[11px] font-bold text-gray-400">
                 8.58%
            </span>
          </div>
        </div>
  
        {/* DETAILS (OUTSIDE) */}
        <button className="bg-black text-white rounded-full h-10 px-5 text-[11px] font-bold whitespace-nowrap">
          Details
        </button>
      </div>
    );
  }
  