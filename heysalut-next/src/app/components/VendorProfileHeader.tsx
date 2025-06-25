export default function VendorProfileHeader() {
  return (
    <div className="flex p-4 @container">
      <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU7rm-ah3t_JTR5nGSXa4VKV_WR_YfS80ErnLcc17bXkY8IcYhNZjsEns5mGRMYfuV7S0MG1Ex1lk9y9QuIvQ-0BzawRM6a2RaozolRozW8FJaXdnv1Vx_m_SggahWsogqIFH3ia0ECqUbQYCYBtAG8pP3PPh4P9gAZz4mPpKq4gCx3do0vpMGaKHcPFK3em5n9onGcuDg6I6D3CC0-lxJgyIe61oQCeNJw0UYNfeI_EUOjd1QLOt5s6FdL1UhIpfVhRQrQIpBwA')" }}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em]">Sophia Carter</p>
            <p className="text-[#4e7097] text-base font-normal leading-normal">Sales Consultant at Luxury Motors</p>
            <p className="text-[#4e7097] text-base font-normal leading-normal">Speaks English, Spanish</p>
          </div>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
          <span className="truncate">Start Live Chat</span>
        </button>
      </div>
    </div>
  );
} 