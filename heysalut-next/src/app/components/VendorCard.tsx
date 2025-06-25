export default function VendorCard({ name, desc, image, top, profileImage }: { name: string; desc: string; image?: string; top?: boolean; profileImage?: string }) {
  const displayImage = profileImage || image || "https://via.placeholder.com/150x90?text=No+Image";
  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            {top && <p className="text-[#4e7097] text-sm font-normal leading-normal">Top Vendor</p>}
            <p className="text-[#0e141b] text-base font-bold leading-tight">{name}</p>
            <p className="text-[#4e7097] text-sm font-normal leading-normal">{desc}</p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
            <span className="truncate">View Profile</span>
          </button>
        </div>
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1" style={{ backgroundImage: `url('${displayImage}')` }}></div>
      </div>
    </div>
  );
} 