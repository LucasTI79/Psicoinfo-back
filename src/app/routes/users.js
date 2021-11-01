import { Router } from 'express';
import UserController from '../controllers/UserController';

const UsersRouter = Router();

UsersRouter.post('/auth', UserController.auth)
UsersRouter.get('/', UserController.index)
UsersRouter.post('/', UserController.store)

export default UsersRouter;