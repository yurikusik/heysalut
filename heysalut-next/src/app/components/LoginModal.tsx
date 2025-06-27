"use client";

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-4 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-[#1978e5] text-2xl font-bold">×</button>
        <div className="flex flex-col w-full py-5">
          <h2 className="text-[#0e141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome to AutoConnect</h2>
          <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Connect with potential car buyers and boost your sales.</p>
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full">
                <span className="truncate">Continue with SearchEngineCo</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full">
                <span className="truncate">Continue with SocialNet</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full">
                <span className="truncate">Continue with LinkedOut</span>
              </button>
            </div>
          </div>
          <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">or</p>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input placeholder="Email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7097] p-[15px] text-base font-normal leading-normal" />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input placeholder="Password" type="password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7097] p-[15px] text-base font-normal leading-normal" />
            </label>
          </div>
          <p className="text-[#4e7097] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer">Forgot password?</p>
          <div className="flex px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#1978e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
          </div>
          <p className="text-[#4e7097] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer">Don&apos;t have an account? Sign up</p>
        </div>
      </div>
    </div>
  );
} 