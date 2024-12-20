import dbConnect from '@/lib/dbConnect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    // Connect to the database
    await dbConnect();

    // Return a success response without seeding any data
    return NextResponse.json({
      message: 'Database connected successfully. No data has been seeded.',
    });
  } catch (error) {
    // Handle error safely with proper type checking
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';

    return NextResponse.json(
      { message: 'Failed to connect to the database.', error: errorMessage },
      { status: 500 }
    );
  }
};
