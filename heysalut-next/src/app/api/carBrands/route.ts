import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("heysalutdb");
  const brands = await db.collection("carBrands").find({}).toArray();
  return NextResponse.json(brands);
} 