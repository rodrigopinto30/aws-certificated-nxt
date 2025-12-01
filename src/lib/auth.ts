import bcrypt from 'bcrypt';
    import jwt from 'jsonwebtoken';

    const JWT_SECRET = process.env.JWT_SECRET || 'your_very_strong_secret_key_here';
    const JWT_EXPIRATION = '1d'; 

    export async function hashPassword(password: string): Promise<string> {
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds);
    }

    export async function verifyPassword(password: string, hash: string): Promise<boolean> {
      return bcrypt.compare(password, hash);
    }

    export function generateAuthToken(userId: number, email: string): string {
      const payload = { userId, email };
      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    }

    export function verifyAuthToken(token: string): any {
      try {
        return jwt.verify(token, JWT_SECRET);
      } catch (error) {
        return null;
      }
    }