import express from 'express';
import { createProject, getProjects, updateProject } from './projectController';
import { authMiddleware } from '../auth/middleware';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);

export default router;