import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import VendorsByLocation from "./components/VendorsByLocation";
import VendorTable from "./components/VendorTable";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <Header />
        <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5 w-full">
          <div className="flex flex-col w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[960px] flex-1">
            <Hero />
            <HowItWorks />
            <VendorsByLocation />
            <VendorTable />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
