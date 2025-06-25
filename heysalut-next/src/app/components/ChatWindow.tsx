const messages = [
  {
    sender: "Ethan Carter",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt9cD4-vTKr6hC_3Oluw-Ylb-M3P9WZgPapuSbyzHvaEk69CB43X99rp0ch_nRvEflXs9OCsXQOc-ZrDBQOtU7L_Lh8Y28yOWOScrS0dPMI0wj61v8zoiVhSYrvlO-J_pPoggPasOZ15tSsaAmnu4yem4gWmYhEBl8n3GYzMrXIO48U11Svm4hCTNp6J4A0GLi-E7JFugGw1YPScb54jqidyWKTa8WgHrLT313Qs3PgnSgfa20yGnT3x4YqTKyikFUFmczFV9UIA",
    date: "Today",
    text: "Hi, I'm interested in the new SUV model you have. Could you provide more details on its features and pricing?",
    fromMe: false,
  },
  {
    sender: "You",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsG_V0F3LrpwP5mvsskXc0UA3Jz8kp25hWVzCZAENd2kqjctMDx-VKaeWhNEFET0Hake5py3Mk5jDUZ5bEfpXdxhYKYNrHTyGVQkVEJ49smTSqQJo0ISIA01f50XRzt_ptxXhg9o4O3bNSrzw0zcfA1ocmFlvh7SvQYK6w87957cEB49qtt_W3d6Gyb_rUf2uC6vMwkjjZueoPeCK4esc3ahobJ4xZtBu_a67kgbmMTp8Y1XJWj25JwSjIhIZ-EXwfKjv5nNbZlQ",
    date: "Today",
    text: "Hello Ethan, thanks for reaching out! I'd be happy to share more about our latest SUV. It comes with advanced safety features, a spacious interior, and excellent fuel efficiency. The base model starts at $35,000, with additional packages available for enhanced features. Would you like to schedule a test drive?",
    fromMe: true,
  },
  {
    sender: "Ethan Carter",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt9cD4-vTKr6hC_3Oluw-Ylb-M3P9WZgPapuSbyzHvaEk69CB43X99rp0ch_nRvEflXs9OCsXQOc-ZrDBQOtU7L_Lh8Y28yOWOScrS0dPMI0wj61v8zoiVhSYrvlO-J_pPoggPasOZ15tSsaAmnu4yem4gWmYhEBl8n3GYzMrXIO48U11Svm4hCTNp6J4A0GLi-E7JFugGw1YPScb54jqidyWKTa8WgHrLT313Qs3PgnSgfa20yGnT3x4YqTKyikFUFmczFV9UIA",
    date: "Yesterday",
    text: "Great, thanks! I'm particularly interested in the safety features and the fuel efficiency. Is there a brochure or a detailed specification sheet available?",
    fromMe: false,
  },
  {
    sender: "You",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWKL5r6O8Q-iE-qntGnzwv5OvkKek9ZX3UgsQRsR3z6KvwAArIyxroLN8xQDFQrAQoklMOOUydjAJ4AaO6E6cmzBvF7wC1xm9IasFvyi0_g9pV7H6aGfYqa8E2KCdO_3YnBfgrlSQ9njjwnR_vfnBBiTuvYpCS-AkM-tdVXP6Vef2d3rZlpaOBZY4UD_ae2ovG-JENlfVkd4yo3_LUrYcDhLO6Vnp3IrCreRG9GTPsIwyxm96GQ-B4bsN-uCOCYXt-7g2gBn8ASA",
    date: "Yesterday",
    text: "Yes, I can send you a detailed brochure right away. It includes all the specifications, safety ratings, and fuel efficiency data. Please give me a moment to upload it.",
    fromMe: true,
  },
  {
    sender: "You",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD_x6DJCkarzYE8A0wKFBY4jZ0kdXv4HdoFYFw0_jZz9mvLgHu5Lortmc9MA8KtNmtViOp4iqa-Y9ROChd198CVPdsWHGAcbDy-aL42K4bZTBOCrBCqrLs95SNZk5Js8bY-gFxZ9rjr0hQlOW1sT4eXH9n_Iha6bM8kN9R6la9SsoE1006ePyTQKLeGTVKG36_u91E17gtRfWizL9nAixqN7cF5bnqPBwbUwj79JpPJVGWx4pHDAIzRlNzTyrAIMFWflFAi3_vxQ",
    date: "Yesterday",
    text: "Here's the brochure. Let me know if you have any questions after reviewing it.",
    fromMe: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgZ1xuvZpxLj95gqdaFAEtZvXTibqutczKd9Ts1SQhyQgTZiAlN9lgOhT-5JWFiUQq_Td_w8E8IVykKrgq26XIZg45mlYdaeHCU2h1rEZIX8L72cg9wgp0K2DWJvj4FaNyneH_EoVy5xpCDiY0G36Uf5K5lNyikeaYQl0kg6vRO1kzBCQCslqDBorCxTfcxBIr257NmfblTDicFsZi1L9a6jiDgmLNBGLsbF9wiaq1gKMIJ1ZM7aCQSQJDpFv_--WJcjQQL4_iFQ"
  }
];

export default function ChatWindow() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">Ethan Carter</p></div>
      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Today</h3>
      {messages.filter(m => m.date === "Today").map((m, i) => (
        <div key={i} className={`flex items-end gap-3 p-4 ${m.fromMe ? "justify-end" : ""}`}>
          {!m.fromMe && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('${m.avatar}')` }}></div>}
          <div className={`flex flex-1 flex-col gap-1 items-${m.fromMe ? "end" : "start"}`}>
            <p className={`text-[#4e7097] text-[13px] font-normal leading-normal max-w-[360px] ${m.fromMe ? "text-right" : ""}`}>{m.sender}</p>
            <p className={`text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 ${m.fromMe ? "bg-[#1978e5] text-slate-50" : "bg-[#e7edf3] text-[#0e141b]"}`}>{m.text}</p>
            {m.image && <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full max-w-[360px]" style={{ backgroundImage: `url('${m.image}')` }}></div>}
          </div>
          {m.fromMe && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('${m.avatar}')` }}></div>}
        </div>
      ))}
      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Yesterday</h3>
      {messages.filter(m => m.date === "Yesterday").map((m, i) => (
        <div key={i} className={`flex items-end gap-3 p-4 ${m.fromMe ? "justify-end" : ""}`}>
          {!m.fromMe && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('${m.avatar}')` }}></div>}
          <div className={`flex flex-1 flex-col gap-1 items-${m.fromMe ? "end" : "start"}`}>
            <p className={`text-[#4e7097] text-[13px] font-normal leading-normal max-w-[360px] ${m.fromMe ? "text-right" : ""}`}>{m.sender}</p>
            <p className={`text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 ${m.fromMe ? "bg-[#1978e5] text-slate-50" : "bg-[#e7edf3] text-[#0e141b]"}`}>{m.text}</p>
            {m.image && <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full max-w-[360px]" style={{ backgroundImage: `url('${m.image}')` }}></div>}
          </div>
          {m.fromMe && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('${m.avatar}')` }}></div>}
        </div>
      ))}
      <div className="flex items-center px-4 py-3 gap-3 @container">
        <label className="flex flex-col min-w-40 h-12 flex-1">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <input placeholder="Type a message" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7097] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal" value="" readOnly />
            <div className="flex border-none bg-[#e7edf3] items-center justify-center pr-4 rounded-r-lg border-l-0 !pr-2">
              <div className="flex items-center gap-4 justify-end">
                <div className="flex items-center gap-1">
                  <button className="flex items-center justify-center p-1.5">
                    <div className="text-[#4e7097]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
                      </svg>
                    </div>
                  </button>
                  <button className="flex items-center justify-center p-1.5">
                    <div className="text-[#4e7097]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#1978e5] text-slate-50 text-sm font-medium leading-normal hidden @[480px]:block">
                  <span className="truncate">Send</span>
                </button>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
} 