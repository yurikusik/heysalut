export default function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzY8H5gQ-fn6JAFTFwg1ZMy8UNZ3WCUAGYfc82j9xqykDwD9p55LdokYdKp69qLOaoaFg5q2whZVUfC4xqpJDL_4UwI_KsplAXtASElN9gzvHU1iZqmuq3WJMp3ds0JAZTwPOiavSUr-MLgWSNTftYEePRCjthQa9F3k_gU8bZ6pBcxFXKG2qirLD8XjYC_g9SA2vIZska_f6QhEnzEKmR9ysQTXLrIJuY8lPGuit7YW36H71LSqqyUM2-37nXISwn-87FIjysgQ")',
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Connect with Buyers, Boost Your Sales
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              HeySalut is the leading platform for car vendors to reach a wider audience and increase sales. Buyers can easily find their dream car and connect with trusted vendors.
            </h2>
          </div>
          <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#757575] flex border border-[#e0e0e0] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search for car models or vendors"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-full placeholder:text-[#757575] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                value=""
                readOnly
              />
              <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e0e0e0] bg-white pr-[7px]">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Search</span>
                </button>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
} 