// seed.js

// Drop existing collections if needed
db.users.drop();
db.vendorProfiles.drop();
db.cars.drop();
db.deals.drop();
db.reviews.drop();
db.chats.drop();
db.messages.drop();

// Insert users
const buyerId = ObjectId();
const vendorId = ObjectId();

db.users.insertMany([
  { _id: buyerId, role: "buyer", name: "Ethan Carter", email: "ethan@example.com" },
  { _id: vendorId, role: "vendor", name: "Sophia Carter", email: "sophia@example.com" }
]);

// Vendor profile
const vendorProfileId = ObjectId();
db.vendorProfiles.insertOne({
  _id: vendorProfileId,
  userId: vendorId,
  title: "Sales Consultant",
  dealership: {
    name: "Luxury Motors",
    address: "123 Main Street, Anytown, USA",
    location: { type: "Point", coordinates: [-73.935242, 40.73061] }
  },
  brands: ["Luxury Motors", "Premium Cars"],
  languages: ["English", "Spanish"],
  rating: { average: 4.8, count: 125 },
  boosted: true
});

// Insert car
const carId = ObjectId();
db.cars.insertOne({
  _id: carId,
  vendorId: vendorProfileId,
  make: "Tesla",
  model: "Model S",
  year: 2022,
  price: 85000,
  condition: "new",
  description: "Luxury electric sedan",
  features: ["Autopilot", "Bluetooth"],
  postedAt: new Date(),
  isDeal: true
});

// Deal
db.deals.insertOne({
  carId,
  description: "Hot deal on Tesla Model S",
  postedBy: vendorId,
  createdAt: new Date(),
  expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
});

// Reviews
db.reviews.insertMany([
  {
    vendorId: vendorProfileId,
    buyerId,
    rating: 5,
    comment: "Great service!",
    createdAt: new Date(),
    status: "approved"
  }
]);

// Chat and messages
const chatId = ObjectId();
db.chats.insertOne({
  _id: chatId,
  buyerId,
  vendorId,
  lastMessageAt: new Date()
});

db.messages.insertMany([
  {
    chatId,
    senderId: buyerId,
    message: "Is the car available?",
    timestamp: new Date(),
    read: false
  },
  {
    chatId,
    senderId: vendorId,
    message: "Yes, want to schedule a test drive?",
    timestamp: new Date(),
    read: false
  }
]);
