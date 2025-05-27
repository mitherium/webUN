import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();

router.post('/publish', async (req, res) => {
  const { name, description, projectId } = req.body;
  const game = await prisma.publishedGame.create({
    data: { name, description, projectId }
  });
  res.json(game);
});

router.get('/search', async (req, res) => {
  const { q } = req.query;
  const games = await prisma.publishedGame.findMany({
    where: {
      name: {
        contains: q as string,
        mode: 'insensitive'
      }
    }
  });
  res.json(games);
});

export default router;