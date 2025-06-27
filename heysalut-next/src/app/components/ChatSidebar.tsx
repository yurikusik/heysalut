const users = [
  {
    name: "Ethan Carter",
    date: "2023-11-20",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKJCaXqPeFDRaA0IGhMPdW0WdBnHcRDrOYi5iabT9uFbbJvezZF76IUCQbtkfuAuGz8QsLgxyFVnNByxlR6gyTGC0FxL4RoRWvgcMCnNV-0Pqorzhe-eSukasYFl0SD4NzgtUWFgt5_1BClI46EclytKFULNh7P00Yce5ranV4GfHNCr-gvSJ-4E-aojko08yje3f_f9EkIwLrqiPnOEKOV0ZPonkQHTbedAhstX5U-XAiB3RxGYhA6nJJmFfB90ZF014u2noQIg",
  },
  {
    name: "Sophia Clark",
    date: "2023-11-19",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlqzpSwyvvtdO1IfcWdvpVlfmDPrQjvK-to7Vtbc1Rh7EqMImjoMb7biO-NctISUo6UTiNhzvGvh8OZ26Bfy2RMlsdanG-hkJ98rZ8gxcOJTLgxHEUi6chIxKnbrLR6fpMdPYd60OVgGxXxS1stPAZKgErQyKSWnkCR2jw-UFksS9HJPzmne5zCw7LGNnkaRNRSjm4gSMOji25EWykyg8vFRa2X_5lMQkdFjG4ZttZdYnxZrCWOj9DEvAbuQWyNayA0Cf2v8eahw",
  },
  {
    name: "Liam Harper",
    date: "2023-11-18",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI0qz6hbCH_bz7Rqk_Y25ItOF0RnTCA0KaARFxJTvr56aMtbq8_KfIgMuuCLkpqGpDQ6-dB0MvsuVeqSaQD333Pb-EKAPXGu8Nlak4UFY-s4rMHtkXb2xuVURkxfQBnBvx72vy6aEISGsDPlJxFdnqhAt7QaQYgl_1gIBb23NaERDgKx6lIrZxYp3Eo0fDtfayjMqycKiFDrHwUFcZuzBUPSQ5IuFIplRH8mFfGndFfcEta2tw4ZJOTopQOF-rG5dVnfl73LRiuQ",
  },
  {
    name: "Olivia Bennett",
    date: "2023-11-17",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYNF7LEqBPO94GfAoyAcsK3sTHjxzMmpefkp9EWddihX1F7JC7zGqYjGKZtKiPg6q5u0q2XVsvgu4Qxz6h6yp3-nFvG_Y9Cw-ymDlQTisOs_mPT1Dd5bu9Watrr8qvETafP7Xy3HQtc7Vqc_wfNw6u80WTqtH0FxYotUtIqs2hFauqiBWGYTWHtjuAPc2K3c1axS7u-cyD9mOBbfmoWA9hfANxVWPiohj2YkKGx9h6qIwrodtDCqjjDYVRZaSi1CboZtEOkfooww",
  },
  {
    name: "Noah Foster",
    date: "2023-11-16",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9kNcpnLUL5-wyFMYG7cBlyP24goIm5qfI1DhL6nCiGNe4HpD2qktB7g2vPnPxqdYrveZHkEQvaGxYB7yhIzwFVClSMoeIOOWX4h8uYtMfuEZlfZaOCCtKTubOoRdc47RRP8jh-gInc8VgvyfwMxZ95Rh4zRwMLGtmppZFTY4Zlz3cgUFWslJH4Z2tHpb1h4QAUPqozl__2so-agAqcFQAmhwtb1aQJKKhYCzziFUk8QQiU7ZxqLPQkf3Y3ELe7QjpsJTUMNOx1Q",
  },
];

export default function ChatSidebar({ open }: { open?: boolean }) {
  return (
    <aside className={`bg-white flex flex-col w-full sm:w-64 md:w-80 max-w-full sm:max-w-xs md:max-w-xs h-full border-r border-[#f2f2f2] z-30 ${open === false ? 'hidden' : ''}`}>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-[#4e7097] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input placeholder="Search" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7097] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" value="" readOnly />
          </div>
        </label>
      </div>
      {users.map((user) => (
        <div key={user.name} className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit" style={{ backgroundImage: `url('${user.avatar}')` }}></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">{user.name}</p>
            <p className="text-[#4e7097] text-sm font-normal leading-normal line-clamp-2">{user.date}</p>
          </div>
        </div>
      ))}
    </aside>
  );
} 