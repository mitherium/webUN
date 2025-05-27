import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProject = async (req: Request, res: Response) => {
  const { name, content } = req.body;
  const userId = (req as any).userId;
  const project = await prisma.project.create({
    data: { name, content, userId }
  });
  res.json(project);
};

export const getProjects = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const projects = await prisma.project.findMany({ where: { userId } });
  res.json(projects);
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  const project = await prisma.project.update({
    where: { id: parseInt(id) },
    data: { content }
  });
  res.json(project);
};