import Header from "../components/Header";
import Footer from "../components/Footer";

function BuyersHero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpR-wfk1yHCF_mYYXJ65-ciWqS-mtR70u4L0WYYLTZHA9ASFAhJGCM9EAZfTm4mpaHYmonbOAE9nLelQ21mloGSiDG_S93kFds4ngRXmCiO_wdXDtIKb98xcSXIgnpfT14vzUcuye03-s5GllgxwW3u65ufr03py-pAOax_2N5arhBom3mesbz4rqEyrZmOXSCLhj18kSXjZrwlKlp2crjD1tDdoSZtir5WtONegCjP7CvMID2gP6uOwkfoRoVxPfU9VVf3rpwbw')" }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Find Your Perfect Car with HeySalut
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Discover a seamless car-buying experience. Request quotes, compare options, and connect with trusted sellers, all in one place.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Start Your Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function BuyersHowItWorks() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How HeySalut Works for Buyers</h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-1 pt-3">
          <div className="text-[#141414]">
            {/* MagnifyingGlass icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </div>
          <div className="w-[1.5px] bg-[#e0e0e0] h-2 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#141414] text-base font-medium leading-normal">Request Quotes</p>
          <p className="text-[#757575] text-base font-normal leading-normal">Submit your car preferences and receive competitive quotes from multiple sellers.</p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#e0e0e0] h-2"></div>
          <div className="text-[#141414]">
            {/* ListBullets icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z" />
            </svg>
          </div>
          <div className="w-[1.5px] bg-[#e0e0e0] h-2 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#141414] text-base font-medium leading-normal">Compare Options</p>
          <p className="text-[#757575] text-base font-normal leading-normal">Evaluate quotes based on price, features, seller ratings, and reviews.</p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center gap-1 pb-3">
          <div className="w-[1.5px] bg-[#e0e0e0] h-2"></div>
          <div className="text-[#141414]">
            {/* Users icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#141414] text-base font-medium leading-normal">Connect with Sellers</p>
          <p className="text-[#757575] text-base font-normal leading-normal">Contact sellers directly to discuss details, schedule test drives, and finalize your purchase.</p>
        </div>
      </div>
    </>
  );
}

function BuyersFeatures() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose HeySalut?</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e0e0e0] bg-white p-4 items-center">
          <div className="text-[#141414]">
            {/* Check icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          </div>
          <h2 className="text-[#141414] text-base font-bold leading-tight">Wide Selection</h2>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e0e0e0] bg-white p-4 items-center">
          <div className="text-[#141414]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          </div>
          <h2 className="text-[#141414] text-base font-bold leading-tight">Transparent Pricing</h2>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e0e0e0] bg-white p-4 items-center">
          <div className="text-[#141414]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          </div>
          <h2 className="text-[#141414] text-base font-bold leading-tight">Trusted Sellers</h2>
        </div>
      </div>
    </>
  );
}

function BuyersCTA() {
  return (
    <div className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Ready to Find Your Dream Car?
          </h1>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
              <span className="truncate">Start Your Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuyersPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <BuyersHero />
            <BuyersHowItWorks />
            <BuyersFeatures />
            <BuyersCTA />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 