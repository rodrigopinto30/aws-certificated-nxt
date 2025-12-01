import type { NextApiRequest, NextApiResponse } from 'next';
import { LoginSchema } from '@/schemas/auth';
import { getDbConnection } from '@/lib/db';
import { verifyPassword, generateAuthToken } from '@/lib/auth';
import { setCookie } from 'cookies-next'; 
import { RowDataPacket } from "mysql2/promise";

interface UserRow extends RowDataPacket {
  id: number;
  password_hash: string;
}

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
 
  const validationResult = LoginSchema.safeParse(req.body);
  if (!validationResult.success) {
    return res.status(400).json({ message: 'Invalid credentials provided.' });
  }

  const { email, password } = validationResult.data;

  try {
    const db = await getDbConnection();

    const [users] = await db.query<UserRow[]>(
      'SELECT id, password_hash FROM users WHERE email = ?',
      [email]
    );
    const user = users[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isValid = await verifyPassword(password, user.password_hash);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = generateAuthToken(user.id, email);

    setCookie('auth_token', token, {
        req, 
        res, 
        maxAge: 60 * 60 * 24,
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', // true en producción (HTTPS)
        sameSite: 'strict',
        path: '/',
    });

    return res.status(200).json({ success: true, message: 'Login successful.' });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
}