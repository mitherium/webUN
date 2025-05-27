import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'No token' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).userId = (decoded as any).id;
    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};