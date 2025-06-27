import Header from "../components/Header";
import Footer from "../components/Footer";

function VendorsHero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx733rRzapR2Ptb6CcTeQAonAcztFFFDDDjRxdYKfCHx_AlaLuOvTmKOhMEP5yD8XG_rnA3jC_mDecTrwHzpQftxQR65KBGZf_BzHVn8APGgq8elU2MAPwfsPi_TWbOOMsFJIkY-LoZ9_d7PjbbfC5Rsnw7Zb2dLej9KPpLLmY_SehLtZgYghCXIMwCTgomrzIv2jzKXOfcz7sMIBRTuSA9T_93V9lCpQ1AZtFG7pbjyZw5kTOlQDCz78zZLn6hZO5gAU0zKmy-Q')" }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Connect with More Buyers and Boost Your Sales
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              HeySalut empowers car vendors to reach a wider audience, streamline their sales process, and achieve unprecedented growth. Join our network of successful vendors today.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function VendorsFeatures() {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Why HeySalut is the Right Choice for Your Dealership
        </h1>
        <p className="text-[#141414] text-base font-normal leading-normal max-w-[720px]">
          HeySalut provides a comprehensive suite of tools and resources designed to help you succeed in today&apos;s competitive market.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e0e0e0] bg-white p-4 flex-col">
          <div className="text-[#141414]">
            {/* Users icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#141414] text-base font-bold leading-tight">Expand Your Reach</h2>
            <p className="text-[#757575] text-sm font-normal leading-normal">Connect with a vast network of potential buyers actively searching for their next vehicle.</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e0e0e0] bg-white p-4 flex-col">
          <div className="text-[#141414]">
            {/* MagnifyingGlass icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#141414] text-base font-bold leading-tight">Targeted Marketing</h2>
            <p className="text-[#757575] text-sm font-normal leading-normal">Utilize advanced filtering and targeting options to reach the right customers with personalized offers.</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#e0e0e0] bg-white p-4 flex-col">
          <div className="text-[#141414]">
            {/* PresentationChart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#141414] text-base font-bold leading-tight">Performance Tracking</h2>
            <p className="text-[#757575] text-sm font-normal leading-normal">Monitor your sales performance, track leads, and optimize your strategies for maximum ROI.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorsHowItWorks() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How HeySalut Works for Vendors</h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-1 pt-3">
          <div className="text-[#141414]">
            {/* TextHThree icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z" />
            </svg>
          </div>
          <div className="w-[1.5px] bg-[#e0e0e0] h-2 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#141414] text-base font-medium leading-normal">Create Your Vendor Profile</p>
          <p className="text-[#757575] text-base font-normal leading-normal">Set up your dealership profile with essential information and branding.</p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#e0e0e0] h-2"></div>
          <div className="text-[#141414]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z" />
            </svg>
          </div>
          <div className="w-[1.5px] bg-[#e0e0e0] h-2 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#141414] text-base font-medium leading-normal">Showcase Your Inventory</p>
          <p className="text-[#757575] text-base font-normal leading-normal">List your vehicles with detailed descriptions, photos, and pricing.</p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center gap-1 pb-3">
          <div className="w-[1.5px] bg-[#e0e0e0] h-2"></div>
          <div className="text-[#141414]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#141414] text-base font-medium leading-normal">Engage with Potential Buyers</p>
          <p className="text-[#757575] text-base font-normal leading-normal">Respond to inquiries, schedule test drives, and close deals efficiently.</p>
        </div>
      </div>
    </>
  );
}

function VendorsSuccessStories() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Success Stories</h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {/* Story 1 */}
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"></div>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">
                &quot;HeySalut has transformed our sales process. We&apos;re reaching more qualified leads and closing deals faster than ever before.&quot;
              </p>
              <p className="text-[#757575] text-sm font-normal leading-normal">- Michael Chen, Sales Manager at City Motors</p>
            </div>
          </div>
          {/* Story 2 */}
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"></div>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">
                &quot;The platform&apos;s intuitive interface and powerful features have made it easy for us to manage our inventory and connect with potential buyers.&quot;
              </p>
              <p className="text-[#757575] text-sm font-normal leading-normal">- Sarah Lee, Owner of Premier Auto Group</p>
            </div>
          </div>
          {/* Story 3 */}
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"></div>
            <div>
              <p className="text-[#141414] text-base font-medium leading-normal">
                &quot;We&apos;ve seen a significant increase in sales since joining HeySalut. It&apos;s an essential tool for any dealership looking to grow.&quot;
              </p>
              <p className="text-[#757575] text-sm font-normal leading-normal">- David Rodriguez, General Manager at Elite Cars</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function VendorsCTA() {
  return (
    <div className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Ready to Take Your Dealership to the Next Level?
          </h1>
          <p className="text-[#141414] text-base font-normal leading-normal max-w-[720px]">
            Join HeySalut today and start connecting with more buyers, increasing your sales, and achieving your business goals.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VendorsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <VendorsHero />
            <VendorsFeatures />
            <VendorsHowItWorks />
            <VendorsSuccessStories />
            <VendorsCTA />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 