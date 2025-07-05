import dotenv from 'dotenv';
import jwt, { Secret, SignOptions, JwtPayload } from 'jsonwebtoken';
dotenv.config();

// Ép kiểu để chắc chắn JWT_SECRET là Secret
const JWT_SECRET = (process.env.JWT_SECRET ?? 'your-secret-key') as Secret;

interface MyJwtPayload extends JwtPayload {
    userId: string;
    role?: string;
}

const signOptions: SignOptions = {
    expiresIn: '1000h',
};

// Tạo token
export function generateToken(payload: MyJwtPayload, expiresIn: string = '1h'): string {
    return jwt.sign(payload as object, JWT_SECRET as Secret, signOptions);
}

// Xác minh token
export function verifyToken(token: string): MyJwtPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as MyJwtPayload;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}
