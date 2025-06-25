import Header from "../components/Header";
import Footer from "../components/Footer";
import VendorProfileHeader from "../components/VendorProfileHeader";
import VendorProfileAbout from "../components/VendorProfileAbout";
import VendorProfileDealership from "../components/VendorProfileDealership";
import VendorProfileBrands from "../components/VendorProfileBrands";
import VendorProfileLanguages from "../components/VendorProfileLanguages";
import VendorProfileReviews from "../components/VendorProfileReviews";
import VendorProfileContact from "../components/VendorProfileContact";

export default function VendorProfilePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <VendorProfileHeader />
            <VendorProfileAbout />
            <VendorProfileDealership />
            <VendorProfileBrands />
            <VendorProfileLanguages />
            <VendorProfileReviews />
            <VendorProfileContact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 