// // import type { NextApiRequest, NextApiResponse } from 'next';
// import { NextRequest, NextResponse } from 'next/server';
// import { SignupSchema, SignupData } from '@/schemas/auth';
// import { getDbConnection } from '@/lib/db';
// import { hashPassword } from '@/lib/auth';

// export async function POST(req: NextRequest, res: NextResponse) {

//   if (req.method !== 'POST') {
//     // return res.status(405).json({ message: 'Method Not Allowed' });
//     return new Response(JSON.stringify({message: "Method Not Allowed"})), {
//       status: 405,
//       headers: { 'Content-Type': 'application/json' }
//     };
//   }
  
//   let body: SignupData;

//   try {
//     body = await req.json();
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Invalid JSON body" },
//       { status: 400 }
//     );
//   }

//   const { name, lastName, email, password} = body;

//   console.log("Datos recibidos:", { name, lastName, email, password });

//   const validationResult = SignupSchema.safeParse(req.body);
//    if (!validationResult.success) {
//      return new Response(JSON.stringify({
//        message: 'Validation failed',
//        errors: validationResult.error.flatten().fieldErrors
//      }), {
//        status: 400,
//        headers: { 'Content-Type': 'application/json' }
//      });
//    }

//     const validatedData = validationResult.data;
//     const { name: vName, lastName: vLastName, email: vEmail, password: vPassword } = validatedData;

//   try {
//     const db = await getDbConnection();

//     const [existingUsers] = await db.query<any[]>(
//       'SELECT id FROM users WHERE email = ?',
//       [email]
//     );

//     if (existingUsers.length > 0) {
//       return new Response(JSON.stringify({
//         message: 'User already exists with this email.'
//       }), {
//         status: 409,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }

//     const passwordHash = await hashPassword(password);

//     await db.query(
//       'INSERT INTO users (email, password_hash, name, lastName) VALUES (?, ?, ?, ?)',
//       [email, passwordHash, name, lastName]
//     );

//     return new Response(JSON.stringify({
//       message: 'User registered successfully.'
//     }), {
//       status: 201,
//       headers: { 'Content-Type': 'application/json' }
//     });

//   } catch (error) {
//     console.error('Signup error:', error);
//     // return res.status(500).json({ message: 'Internal Server Error during registration.' });
//     return new Response(JSON.stringify({
//       message: 'Internal Server Error during registration.'
//     }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import { SignupSchema, SignupData } from '@/schemas/auth';
import { getDbConnection } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

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

    const [existingUsers] = await db.query<any[]>(
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

  } catch (error) {
    // console.error('Signup error:', error);

    return NextResponse.json(
      { message: 'Internal Server Error during registration.' },
      { status: 500 }
    );
  }
}
