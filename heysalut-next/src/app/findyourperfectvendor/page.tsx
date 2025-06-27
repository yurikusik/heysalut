'use client';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FindVendorFilters from "../components/FindVendorFilters";
import VendorCard from "../components/VendorCard";
import Pagination from "../components/Pagination";
import { useEffect, useState, useCallback } from "react";

interface Language {
  name: string;
}

interface Brand {
  name: string;
}

interface Dealership {
  name: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Vendor {
  _id: string;
  dealership?: Dealership;
  title: string;
  profileImage?: string;
  image?: string;
  boosted?: boolean;
  location?: string;
  coordinates?: Coordinates;
  languages?: Language[];
  brands?: Brand[];
  rating?: number;
}

interface Filters {
  search: string;
  language: string;
  brand: string;
  rating: string;
  locationRange: string;
}

export default function FindYourPerfectVendorPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    language: "",
    brand: "",
    rating: "",
    locationRange: "",
  });

  useEffect(() => {
    fetch("/api/sellers")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
        setFilteredVendors(data);
        setLoading(false);
      });
  }, []);

  const handleFiltersChange = useCallback((newFilters: Filters) => {
    setFilters(newFilters);
  }, []);

  useEffect(() => {
    let filtered = [...vendors];

    // Search filter (name or location)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter((vendor) => {
        const name = (vendor.dealership?.name || vendor.title || "").toLowerCase();
        const location = (vendor.location || "").toLowerCase();
        return name.includes(searchLower) || location.includes(searchLower);
      });
    }

    // Language filter
    if (filters.language) {
      filtered = filtered.filter((vendor) => {
        const vendorLanguages = vendor.languages || [];
        return vendorLanguages.some((lang: Language) => 
          lang.name === filters.language
        );
      });
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter((vendor) => {
        const vendorBrands = vendor.brands || [];
        return vendorBrands.some((brand: Brand) => 
          brand.name === filters.brand
        );
      });
    }

    // Rating filter
    if (filters.rating) {
      const minRating = parseFloat(filters.rating);
      filtered = filtered.filter((vendor) => {
        const rating = vendor.rating || 0;
        return rating >= minRating;
      });
    }

    // Location range filter (if vendor has coordinates)
    if (filters.locationRange) {
      // For now, we'll just filter by vendors that have location data
      // In a real implementation, you'd calculate distance from user's location
      filtered = filtered.filter((vendor) => {
        return vendor.location || vendor.coordinates;
      });
    }

    setFilteredVendors(filtered);
  }, [vendors, filters]);

  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Find Your Perfect Vendor</p>
            </div>
            {/* Hero/Map Section */}
            <div className="flex flex-1 flex-col @[480px]:px-4 @[480px]:py-3">
              <div
                className="bg-cover bg-center flex min-h-[320px] flex-1 flex-col justify-between px-4 pb-4 pt-5 @[480px]:rounded-xl @[480px]:px-8 @[480px]:pb-6 @[480px]:pt-8"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_EBJvj7t_9GjMGhyxXNAFv6GSW7B_ymIdlOh2dWmDiJXCo06SFINcetQxYTBMhVod-Es5iwDcjRzJZMc7QKY0whrPUugvxJnGyJ1hcwfS6-WzROCi-Xa-aksJ_fnXcQaJkSIi_erUvDSvbPJhZIXWsfK6n1tcXNkOgThlbOzA2fHEsmEcHQ2qooY2m6PFah9x1YXpez8H_GlPbg6GJGf87fagnW9185Jk5HWlZRkHqpX1B2B84VIjfShOI3JiZRaw5HLwXW6D2w')" }}
              >
                <label className="flex flex-col min-w-40 h-12">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div className="text-[#757575] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input placeholder="Search for vendors by location" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#757575] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" value="" readOnly />
                  </div>
                </label>
                <div className="flex flex-col gap-0.5">
                  <button className="flex size-10 items-center justify-center rounded-t-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    <div className="text-[#141414]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                      </svg>
                    </div>
                  </button>
                  <button className="flex size-10 items-center justify-center rounded-b-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    <div className="text-[#141414]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="text-[#141414]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" style={{ transform: "scale(-1, 1)" }}>
                    <path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Filters/Search Section */}
            <FindVendorFilters onFiltersChange={handleFiltersChange} />
            {/* Vendor Cards */}
            {loading ? (
              <div className="text-center py-10 text-[#757575]">Loading vendors...</div>
            ) : filteredVendors.length === 0 ? (
              <div className="text-center py-10 text-[#757575]">No vendors found matching your criteria.</div>
            ) : (
              filteredVendors.map((v, i) => (
                <VendorCard
                  key={v._id || i}
                  name={v.dealership?.name || v.title || "No Name"}
                  desc={v.title || "No Description"}
                  profileImage={v.profileImage}
                  image={v.image}
                  top={v.boosted}
                />
              ))
            )}
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
} 