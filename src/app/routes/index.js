import { Router } from 'express';
import UsersRouter from './users';
import ChildrensRouter from './children';
import levelsRouter from './levels';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/childrens', ChildrensRouter);
routes.use('/levels', levelsRouter);


export default routes;