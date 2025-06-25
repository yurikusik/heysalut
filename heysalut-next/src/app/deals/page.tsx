import Header from "../components/Header";
import Footer from "../components/Footer";

interface DealComment {
  user: string;
  avatar: string;
  time: string;
  text: string;
}

interface DealCardProps {
  image: string;
  title: string;
  desc: string;
  poster: string;
  comments: DealComment[];
}

function DealsFeed() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">Deals</p>
          <p className="text-[#757575] text-sm font-normal leading-normal">Explore the latest deals on new and used vehicles. Find your dream car at an unbeatable price.</p>
        </div>
      </div>
      {/* Post form */}
      <div className="flex items-center px-4 py-3 gap-3 @container">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#757575] flex border-none bg-[#f2f2f2] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input placeholder="Search" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#f2f2f2] focus:border-none h-full placeholder:text-[#757575] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" value="" readOnly />
          </div>
        </label>
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f2f2f2] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <div className="text-[#141414]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
            </svg>
          </div>
        </button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgSEavbXwMwiDLeEV2vUMh428CjkYkmMhxprU6Gx8-PBXpxxMgNfg-bQShzkat1-ugxw84LVMxycJo7XyvW3_8oxxVSfm0OmKr7DM8rnTE1sFW0DF49GR5LCS0-zvyZGQxCr1KoHU0GL5pfSMApV2sjVaCfOCTI4BWUKtIRXhgN2p_EQ9u99GPe7ZCqLbqansx81r4wUxUFtQ7Fh4vjFX8gnZYdYxJ_sW-1xhrvXrOFeJLBCsw21JwYoDV-CvjTCOEi1YzwWusBw')" }}></div>
      </div>
      {/* Deals list */}
      <DealCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAxY2uOuryvMgmq5CJNBCiOxZXBayG_elsZPAOjYnE8Z14PG-n_VFMtLLoNOowtWu6v09SrwFMwsVRih8JGsH0osfMNnZvtCHPw8TPTiFJO_dtWgnO8GXqoaoG-X922nBHpPejeA6kLw-D4d7ULnkkJAjKyWzz_EmJzYrZ50xgdpApO5OLnvQGERikRCQTRYZ7tr5pV8wo2nSL_yCLnX7WTr_YLfwfZzUEKmWUGzarYlH4MGR3wQ21hVdxZK7Q9IG08XAcCmnJS7g"
        title="2021 Sedan - Like New!"
        desc="This 2021 Sedan is in excellent condition with low mileage. Perfect for city driving and long trips. Features include a fuel-efficient engine, advanced safety features, and a premium sound system."
        poster="Olivia Bennett"
        comments={[
          { user: "Ethan Carter", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8M6vITTO6dRTRc-5Fkw9g4MOXBV4imYFkdwjMJDcJBCXvsoEP6q4mvo6k8IgVI8lTtVJUfRIN3P_R1VEnQl_2j6B79J2lVouh88QvHZd7Oq_BzGnSGET9SMSt0ZKLffJcl-E80hjC-iMlKjrh5-X-65PPK-3Vwra7yIOYA-fOdiAG7N4wRnUchlECh1pfFYlb190sWxFW8G94q1gGIr0WBC9nhWbuRfFzuztAs99bHUgRGz4Q1hkLfsF2VZbhQjGEvfrXBOkhiQ", time: "2d", text: "Is this still available? What's the mileage?" },
        ]}
      />
      <DealCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJC44MaJzCP4wzby8ucoMad3NMgmlamIlmhc0J7hjLw-EEKos0iWe2uP8JnwPwB1BJe958rqnxKEAZwR7g0SAeu_CsWnlDlNwQbE1jhayNXzzSYQFn__-ai-NI_hiWCUEcK-aDppLU4TJhsWgVfGzxbIt6h5ogRkSaTxyoUA_JwJoT2WjHZ0kjVM_17Ue0-MQSCw6WRBbjtvhqgNWhJ_2E0GDvbfATh1WAQikq9ne36LFroQXUGsGhwZNAb_Gn8eChCpxMMTEqA"
        title="Demo SUV - Save Big!"
        desc="Get a nearly new SUV at a fraction of the price. This demo SUV has been lightly used and comes with a full warranty. It's equipped with all the latest technology and comfort features."
        poster="Nathan Walker"
        comments={[
          { user: "Sophia Chen", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBCdlen42i7k0QNlIeF-Ff33ZfGNTCXmY_RlmNvHjMtYE-SL3_uKVUAV6DXKGH3OjPx1B9T2jUWaN1kRvu7geLhlxI_YfKbezY-Qwf_3FL0NdX_MnjLEbsqaGh3ghpHm1jKB58BPhNWDpIXPgajwiBpsWr5qTD63dvchsRkbnq0pLBVqchPV0X--opn4ApdDyPvhl5u48ocoiFPsPBVsQsPHzYdstUeKrzSYXqPhTy4Ugj7He_BFNC78pjCGDY5GZLkSmuxXBgeQ", time: "1d", text: "Interested! Can I schedule a test drive?" },
        ]}
      />
      <DealCard
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_7UgKf3r5Lv-BtSQK3h3YHgyw5F3Ao8XcYRGXg4S3p45wvFY_9poMoDJtGbLxu0tqvHMLnR0uPhi1FtZMIpIu_logd59JpNiSpHxRpRg7MpLIafHMM4DTdJC78ZaRmJlmW6Sl5EhwE-F73ss2YDD3YY1IZ_WjuHwcDnmwge5N_l_XOeY_5eAKKVZ_VHCDva4nTUlTdhYdxric1TUrlUUW2Fgcz2RM5xoubApyd6B5mFD_UKJJR-43S9fPiMdqMSlwXslZm9txA"
        title="Special Offer: Truck with Tow Package"
        desc="This rugged truck is ready for any job. It includes a heavy-duty tow package, all-terrain tires, and a spacious cabin. Perfect for work or play."
        poster="Charles Harris"
        comments={[
          { user: "Ryan Park", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrYzwoqlRRVzcEyvapdiQulFTRHWUrDAncjUMgeA08aOoRROkRfiZLPYfbs-l3r4MAWC1nOhFVJfPHTOuWFxd8R1RkSLjo4CZfeTbj39GL1sMosaJMo3GcPLqiYTGaUP9Xz_5tdsHWLBdyI0c1qnM18B8gYo6S5CpCQXimK1Bfa9C-x4xumJboQM2eFjkgGk6zwUxBXLxdzglFKxdCaRD-ZXdLcz7Q5xL1bYKUBrCC2QJsZQ3s-4yH9QNXkVUN4O7Q_btdfCcSWg", time: "3d", text: "What's the towing capacity?" },
        ]}
      />
    </>
  );
}

function DealCard({ image, title, desc, poster, comments }: DealCardProps) {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{ backgroundImage: `url('${image}')` }}></div>
        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
          <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">{title}</p>
          <div className="flex items-end gap-3 justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[#757575] text-base font-normal leading-normal">{desc}</p>
              <p className="text-[#757575] text-base font-normal leading-normal">Posted by: {poster}</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-black text-white text-sm font-medium leading-normal">
              <span className="truncate">Make an Offer</span>
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Comments</h3>
      {comments.map((c, i) => (
        <div key={i} className="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('${c.avatar}')` }}></div>
          <div className="flex h-full flex-1 flex-col items-start justify-start">
            <div className="flex w-full flex-row items-start justify-start gap-x-3">
              <p className="text-[#141414] text-sm font-bold leading-normal tracking-[0.015em]">{c.user}</p>
              <p className="text-[#757575] text-sm font-normal leading-normal">{c.time}</p>
            </div>
            <p className="text-[#141414] text-sm font-normal leading-normal">{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DealsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <DealsFeed />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 