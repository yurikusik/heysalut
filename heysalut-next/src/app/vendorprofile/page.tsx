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
      <div className="flex h-full grow flex-col">
        <Header />
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5 w-full">
          <div className="flex flex-col w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[960px] flex-1">
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