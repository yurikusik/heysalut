export default function VendorProfileReviews() {
  return (
    <>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Reviews</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
        <div className="flex flex-col gap-2">
          <p className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em]">4.8</p>
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-[#1978e5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                </svg>
              </div>
            ))}
            <div className="text-[#1978e5]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
              </svg>
            </div>
          </div>
          <p className="text-[#0e141b] text-base font-normal leading-normal">125 reviews</p>
        </div>
        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
          {[{n:5,p:70},{n:4,p:20},{n:3,p:5},{n:2,p:3},{n:1,p:2}].map((row) => (
            <>
              <p className="text-[#0e141b] text-sm font-normal leading-normal">{row.n}</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#d0dbe7]"><div className="rounded-full bg-[#1978e5]" style={{ width: `${row.p}%` }}></div></div>
              <p className="text-[#4e7097] text-sm font-normal leading-normal text-right">{row.p}%</p>
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-slate-50 p-4">
        {[{
          name: "Ethan Harper",
          date: "2 months ago",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyoxsDuJfzQmXdzgl1o6-slFc087fuCSDAU3GolZrSf-1GRsRkcACb6gkUgK4pRQag9r6zI0aA3je6d6cA_TNBIBYy6WunHbjJQnbkHD3sEYeOepC0wuVZPOqHQvt98UUfOjYvjk0InKtNVbncYgOH2oH9HPJ5DhMQXncM2thDUA32tg9sA-O5U5ZH9vCuqBtbIZGB4Jrt848Le9HkYqrZEi32Fz7MVbsNEthgIQdUEKVMWhP5Cb-yyXGzAlLwnHC-5HuI7gHhKQ",
          rating: 5,
          text: "Sophia was incredibly helpful and knowledgeable. She made the process of buying my new car seamless and enjoyable. I highly recommend her!",
          up: 15,
          down: 2,
        },{
          name: "Olivia Bennett",
          date: "3 months ago",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv4DMEUX4-FPPzKGe8BYT4o8AtI97qcmF4U9ZEmkTjEe1f3ULbbw5Za7HMciv41OHIld-qd2SSK63LFOJ3P8DXby92dtyVsHYbhOFD8zGLSdni8VGE97ow--8wBaRhMPpm4TFr9gHT3K_hjDJ8qBVledMXqxwNhR7-HU0j1oUUWP-c5DOeCieLKSIUZQNUtTI6x5mxogsRzW9JJMJvg7ck6h93V7lPKkroE7HC5oN4ytBBj4ZBJgia0REFI8oevQCw-E1674thlw",
          rating: 4,
          text: "Sophia was very professional and answered all my questions thoroughly. While I didn't end up buying a car, I appreciated her assistance.",
          up: 8,
          down: 1,
        }].map((r, i) => (
          <div key={i} className="flex flex-col gap-3 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url('${r.avatar}')` }}></div>
              <div className="flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal">{r.name}</p>
                <p className="text-[#4e7097] text-sm font-normal leading-normal">{r.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(r.rating)].map((_, i) => (
                <div key={i} className="text-[#1978e5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
              ))}
              {[...Array(5 - r.rating)].map((_, i) => (
                <div key={i} className="text-[#aec0d5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[#0e141b] text-base font-normal leading-normal">{r.text}</p>
            <div className="flex gap-9 text-[#4e7097]">
              <button className="flex items-center gap-2">
                <div className="text-inherit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
                  </svg>
                </div>
                <p className="text-inherit">{r.up}</p>
              </button>
              <button className="flex items-center gap-2">
                <div className="text-inherit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                  </svg>
                </div>
                <p className="text-inherit">{r.down}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 