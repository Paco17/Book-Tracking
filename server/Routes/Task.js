import express from 'express';
import { CreateTask, GetTask, GetTasks, UpdateTask } from '../Controllers/Task.js';

const router = express.Router();
router.post('/create',CreateTask)
router.purge('/:id',UpdateTask);
router.get('/:id', GetTask)
router.get('/', GetTasks)

export default router