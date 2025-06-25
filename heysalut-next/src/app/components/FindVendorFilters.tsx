"use client";
import { useEffect, useState } from "react";

interface FilterProps {
  onFiltersChange: (filters: {
    search: string;
    language: string;
    brand: string;
    rating: string;
    locationRange: string;
  }) => void;
}

export default function FindVendorFilters({ onFiltersChange }: FilterProps) {
  const [languages, setLanguages] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loadingLang, setLoadingLang] = useState(true);
  const [loadingBrand, setLoadingBrand] = useState(true);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [locationRange, setLocationRange] = useState("");
  const ratings = [0, 1, 2, 3, 4, 5];
  const locationRanges = [5, 10, 25, 50, 100];

  useEffect(() => {
    fetch("/api/languages")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data);
        setLoadingLang(false);
      });
    fetch("/api/carBrands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoadingBrand(false);
      });
  }, []);

  useEffect(() => {
    onFiltersChange({
      search,
      language,
      brand,
      rating,
      locationRange,
    });
  }, [search, language, brand, rating, locationRange, onFiltersChange]);

  return (
    <>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#757575] flex border-none bg-[#f2f2f2] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input 
              placeholder="Search for vendors by name or location" 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#f2f2f2] focus:border-none h-full placeholder:text-[#757575] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </label>
      </div>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {/* Language Combobox */}
        <select 
          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f2f2f2] pl-4 pr-2 text-[#141414] text-sm font-medium leading-normal" 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Language</option>
          {languages.map((lang: any) => (
            <option key={lang._id} value={lang.name}>{lang.name}</option>
          ))}
        </select>
        {/* Brand Combobox */}
        <select 
          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f2f2f2] pl-4 pr-2 text-[#141414] text-sm font-medium leading-normal" 
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Brand</option>
          {brands.map((brand: any) => (
            <option key={brand._id} value={brand.name}>{brand.name}</option>
          ))}
        </select>
        {/* Rating Combobox */}
        <select 
          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f2f2f2] pl-4 pr-2 text-[#141414] text-sm font-medium leading-normal" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Rating</option>
          {ratings.map((r) => (
            <option key={r} value={r}>{r}+</option>
          ))}
        </select>
        {/* Location Range Combobox */}
        <select 
          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f2f2f2] pl-4 pr-2 text-[#141414] text-sm font-medium leading-normal" 
          value={locationRange}
          onChange={(e) => setLocationRange(e.target.value)}
        >
          <option value="">Distance</option>
          {locationRanges.map((range) => (
            <option key={range} value={range}>{range} km</option>
          ))}
        </select>
      </div>
    </>
  );
} 