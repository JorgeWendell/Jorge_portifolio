import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE PreEnrollment  ( Name varchar(255), Email varchar(255), Phone varchar(25), Message varchar(255))`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}