import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const COLLECTION = "vendorProfiles";
const DB_NAME = "heysalutdb";

// GET: List all sellers
export async function GET() {
  console.log("[API] GET /api/sellers");
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const sellers = await db.collection(COLLECTION).find({}).toArray();
  console.log("[API] Sellers fetched:", sellers.length);
  console.log("----Sellers fetched:", sellers);
  return NextResponse.json(sellers);
}

// POST: Create a new seller
export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("[API] POST /api/sellers", data);
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).insertOne(data);
  console.log("[API] Seller inserted with ID:", result.insertedId);
  return NextResponse.json({ insertedId: result.insertedId });
}

// PUT: Update a seller by _id
export async function PUT(req: NextRequest) {
  const { _id, ...update } = await req.json();
  console.log("[API] PUT /api/sellers", { _id, update });
  if (!_id) return NextResponse.json({ error: "Missing _id" }, { status: 400 });
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).updateOne(
    { _id: new ObjectId(_id) },
    { $set: update }
  );
  console.log("[API] Seller updated, modifiedCount:", result.modifiedCount);
  return NextResponse.json({ modifiedCount: result.modifiedCount });
}

// DELETE: Remove a seller by _id
export async function DELETE(req: NextRequest) {
  const { _id } = await req.json();
  console.log("[API] DELETE /api/sellers", { _id });
  if (!_id) return NextResponse.json({ error: "Missing _id" }, { status: 400 });
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(_id) });
  console.log("[API] Seller deleted, deletedCount:", result.deletedCount);
  return NextResponse.json({ deletedCount: result.deletedCount });
} 