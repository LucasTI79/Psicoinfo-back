import { Router } from 'express';
import UsersRouter from './users';

const routes = Router();

routes.use('/users', UsersRouter)

export { routes };