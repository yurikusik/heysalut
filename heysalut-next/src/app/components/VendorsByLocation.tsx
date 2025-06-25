export default function VendorsByLocation() {
  return (
    <section>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Find Vendors by Location</h2>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#757575] flex border-none bg-[#f2f2f2] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Search for vendors by location"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#f2f2f2] focus:border-none h-full placeholder:text-[#757575] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value=""
              readOnly
            />
          </div>
        </label>
      </div>
      <div className="flex px-4 py-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwWLijlrECDtnzeD7f51quGcOel3Nf47PObzSuXuxnS1jRZOsm5ckJOuyJfEGpcaM55tffc3pN4D6ud5gV8O40bCwJlZKIQO0dtwWyGzA8wqVp9XvR2SqvXI-9d0OzdhLusQowub-sObZLQXvJ0XU2kH8Gq3PnqGUMKUxR2uzchjBTSMy6DASr87aTw-jTMaHSfAnwU7ZxIpIXjNNJnr9TknPL6DWtCRF-TRICGzc0yeeCq5dUJal3jcheS3hCfTLO2V_548l0eA")',
          }}
        ></div>
      </div>
    </section>
  );
} 