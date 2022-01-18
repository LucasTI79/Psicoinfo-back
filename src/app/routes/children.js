import { Router } from 'express';
import childrenController from '../controllers/ChildrenController';
const childrenRouter = Router();

childrenRouter.get('/:idParent', childrenController.indexByParent)

childrenRouter.get('/', childrenController.store)
childrenRouter.get('/', childrenController.index)


export default childrenRouter;