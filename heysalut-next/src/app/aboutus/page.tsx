import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutIntro() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">About AutoConnect</p>
      </div>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        AutoConnect is a leading platform dedicated to empowering car sales professionals with the tools and resources they need to succeed in today&apos;s competitive market. Our
        mission is to bridge the gap between vendors and potential clients, fostering meaningful connections that drive sales and build lasting relationships.
      </p>
    </>
  );
}

function AboutMission() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        At AutoConnect, we believe that every car sales vendor deserves the opportunity to thrive. We are committed to providing innovative solutions that streamline the
        sales process, enhance client engagement, and ultimately increase revenue. Our platform is designed to be user-friendly, intuitive, and adaptable to the unique needs
        of each vendor.
      </p>
    </>
  );
}

function AboutTeam() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet the Team</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* Team Member 1 */}
        <div className="flex flex-col gap-3 text-center pb-3">
          <div className="px-4">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw9mUr0C1YG_jdxmBUaPuzJLBd9XOV3_LarFu7orbOroknS6EWVh27dpZrQypGZofFuGSeWkb8eLDpCmHA8K5GayqaI_aGClQS6hocjTyER6cTLIWOozsdoJ8X6cDpCqm5NLRDjLIoT4KSYJPdG74imyBMpk7ukCEnuQG3QPbpMq-fLjzQ8uYE9c690OAesW3twN7U03v4TKrnIMAaY1pXrFnIV13ym4-5ImeNrF5TCceT1bsGUWWx6v-NYSgK4JyjNGCFKaT0Fw')" }}
            ></div>
          </div>
          <div>
            <p className="text-[#141414] text-base font-medium leading-normal">Ethan Carter</p>
            <p className="text-[#757575] text-sm font-normal leading-normal">CEO</p>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="flex flex-col gap-3 text-center pb-3">
          <div className="px-4">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUQDbtPva52ibFPNaaI9lH-3BZawhXFNcu-xvxMopj-YRmYTsLuasaw2dAt64N0qi7yZ3Ygn9xkz9e3VW7hu6dfSNmEsjgYx1435C-ei60_EIG4jMOT_Zms9BBTye4vd_i4UH47F0asQscOUkWnBdK8L41a1hwq4Py-s-3TzSTyXE-kS3pggUWAzHKJDDVtASQoYizJ_z81rl77CkHlIN2ysJEFz9T5ybQc-CnbJzjsO_bCYDy2X_2plc9dn5V81-d3VPQmxGgYw')" }}
            ></div>
          </div>
          <div>
            <p className="text-[#141414] text-base font-medium leading-normal">Sophia Bennett</p>
            <p className="text-[#757575] text-sm font-normal leading-normal">Head of Sales</p>
          </div>
        </div>
        {/* Team Member 3 */}
        <div className="flex flex-col gap-3 text-center pb-3">
          <div className="px-4">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGUJ3-sWq7vwUV-EcCNl1KcOFhC9PBYKC_h-UgFbidpO1PlKPtFvZ2jFlfNEr27LqKho6Njmk0ONexakt9DqtpVJ5AQiAKrbQTVrMa5QdwIqehvw0DNOA1tXKniFoPRE9FFw84VahfW1l1Ylu0DsfcM7rVr42HyUzGDxXNpT0mHss4HHsGKkvRgv239Bxf8V9H3wG3fz6CcGv_bMGKdDkHkpclZ_SKpj-ADDlbhNxwrZWz564fVHxwm-mjFSorgsGm8OfSjoD6gw')" }}
            ></div>
          </div>
          <div>
            <p className="text-[#141414] text-base font-medium leading-normal">Liam Harper</p>
            <p className="text-[#757575] text-sm font-normal leading-normal">Lead Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutContact() {
  return (
    <>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Us</h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We&apos;d love to hear from you! If you have any questions, feedback, or inquiries, please don&apos;t hesitate to reach out. You can contact us via email at
        support@autoconnect.com or call us at (555) 123-4567. Follow us on social media for the latest updates and industry insights.
      </p>
      <div className="@container">
        <div className="gap-2 px-4 flex flex-wrap justify-start">
          {/* Twitter */}
          <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
            <div className="rounded-full bg-[#f2f2f2] p-2.5">
              <div className="text-[#141414]">
                {/* Twitter icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                </svg>
              </div>
            </div>
            <p className="text-[#141414] text-sm font-medium leading-normal">Twitter</p>
          </div>
          {/* Facebook */}
          <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
            <div className="rounded-full bg-[#f2f2f2] p-2.5">
              <div className="text-[#141414]">
                {/* Facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </div>
            </div>
            <p className="text-[#141414] text-sm font-medium leading-normal">Facebook</p>
          </div>
          {/* Instagram */}
          <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
            <div className="rounded-full bg-[#f2f2f2] p-2.5">
              <div className="text-[#141414]">
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </div>
            </div>
            <p className="text-[#141414] text-sm font-medium leading-normal">Instagram</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AboutUsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <AboutIntro />
            <AboutMission />
            <AboutTeam />
            <AboutContact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 