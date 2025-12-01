import { NextRequest, NextResponse } from 'next/server';
import { SignupSchema, SignupData } from '@/schemas/auth';
import { getDbConnection } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { RowDataPacket } from "mysql2/promise";

interface ExistingUserRow extends RowDataPacket {
  id: number;
}

export async function POST(req: NextRequest) {
  let body: SignupData;

  try {
    body = await req.json();
  } catch (error) {
    
    return NextResponse.json(
      { message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const validationResult = SignupSchema.safeParse(body);
  
  if (!validationResult.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { email, password, name, lastName , confirmPassword} = validationResult.data;

  try {
    const db = await getDbConnection();

    const [existingUsers] = await db.query<ExistingUserRow[]>(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return NextResponse.json(
        { message: 'User already exists with this email.' },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);

    await db.query(
      'INSERT INTO users (email, password_hash, name, lastName) VALUES (?, ?, ?, ?)',
      [email, passwordHash, name, lastName]
    );

    return NextResponse.json(
      { message: 'User registered successfully.' },
      { status: 201 }
    );

  } catch (_error) {
    // console.error('Signup error:', error);

    return NextResponse.json(
      { message: 'Internal Server Error during registration.' },
      { status: 500 }
    );
  }
}
