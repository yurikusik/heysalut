// seed-languages-brands.js

db = db.getSiblingDB('heysalutdb');

// Drop if exists
db.languages.drop();
db.carBrands.drop();

// Insert languages
db.languages.insertMany([
  { name: "English" },
  { name: "Spanish" },
  { name: "French" },
  { name: "German" },
  { name: "Chinese" },
  { name: "Japanese" },
  { name: "Portuguese" },
  { name: "Russian" }
]);

// Insert car brands
db.carBrands.insertMany([
  { name: "Toyota" },
  { name: "Honda" },
  { name: "Ford" },
  { name: "BMW" },
  { name: "Mercedes-Benz" },
  { name: "Audi" },
  { name: "Tesla" },
  { name: "Chevrolet" },
  { name: "Nissan" },
  { name: "Volkswagen" }
]);

print("Languages and car brands seeded!");