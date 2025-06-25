export default function VendorProfileBrands() {
  return (
    <>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Brands</h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
          <p className="text-[#0e141b] text-sm font-medium leading-normal">Luxury Motors</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
          <p className="text-[#0e141b] text-sm font-medium leading-normal">Premium Cars</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-4">
          <p className="text-[#0e141b] text-sm font-medium leading-normal">High-End Vehicles</p>
        </div>
      </div>
    </>
  );
} 