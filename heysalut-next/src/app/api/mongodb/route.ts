import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';

export async function GET() {
  if (!uri) {
    return NextResponse.json({ error: 'MONGODB_URI not set in environment' }, { status: 500 });
  }
  try {
    const client = new MongoClient(uri);
    await client.connect();
    await client.close();
    return NextResponse.json({ message: 'Successfully connected to MongoDB!' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 