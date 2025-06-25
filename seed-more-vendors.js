// Run this in mongosh
db = db.getSiblingDB('heysalutdb');

db.vendorProfiles.insertMany([
  {
    _id: ObjectId(),
    userId: ObjectId(),
    title: "Luxury Car Specialist",
    dealership: {
      name: "Luxury Motors Montreal",
      address: "1010 Rue Sainte-Catherine Ouest, Montréal, QC",
      location: {
        type: "Point",
        coordinates: [-73.5746, 45.4972]
      }
    },
    brands: ["Mercedes-Benz", "BMW", "Audi"],
    languages: ["English", "French"],
    rating: { average: 4.9, count: 125 },
    boosted: true,
    profileImage: "https://www.lorempixel.com/986/856"
  },
  {
    _id: ObjectId(),
    userId: ObjectId(),
    title: "Electric Vehicle Expert",
    dealership: {
      name: "Green Drive Montreal",
      address: "3025 Boulevard Saint-Laurent, Montréal, QC",
      location: {
        type: "Point",
        coordinates: [-73.5771, 45.5155]
      }
    },
    brands: ["Tesla", "Nissan", "Chevrolet"],
    languages: ["English", "French"],
    rating: { average: 4.8, count: 98 },
    boosted: true,
    profileImage: "https://www.lorempixel.com/651/928"
  },
  {
    _id: ObjectId(),
    userId: ObjectId(),
    title: "Family Car Specialist",
    dealership: {
      name: "Comfort Auto Sales Montreal",
      address: "8400 Boulevard Décarie, Montréal, QC",
      location: {
        type: "Point",
        coordinates: [-73.6545, 45.4961]
      }
    },
    brands: ["Toyota", "Honda", "Ford"],
    languages: ["English", "French"],
    rating: { average: 4.5, count: 87 },
    boosted: false,
    profileImage: "https://dummyimage.com/385x94"
  },
  {
    _id: ObjectId(),
    userId: ObjectId(),
    title: "Sports Car Dealer",
    dealership: {
      name: "Speed Auto Montreal",
      address: "5600 Rue Ferrier, Montréal, QC",
      location: {
        type: "Point",
        coordinates: [-73.6716, 45.4979]
      }
    },
    brands: ["Porsche", "Lamborghini", "Ferrari"],
    languages: ["English", "Italian", "French"],
    rating: { average: 4.9, count: 150 },
    boosted: true,
    profileImage: "https://placeimg.com/506/351/any"
  },
  {
    _id: ObjectId(),
    userId: ObjectId(),
    title: "Certified Used Car Dealer",
    dealership: {
      name: "Trusted Autos Montreal",
      address: "1285 Rue Berri, Montréal, QC",
      location: {
        type: "Point",
        coordinates: [-73.5652, 45.5160]
      }
    },
    brands: ["Hyundai", "Kia", "Chevrolet"],
    languages: ["English", "French"],
    rating: { average: 4.0, count: 112 },
    boosted: false,
    profileImage: "https://dummyimage.com/56x290"
  }
]);
