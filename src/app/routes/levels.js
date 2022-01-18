import { Router } from 'express';
import childrenController from '../controllers/ChildrenController';
const levelsRouter = Router();

levelsRouter.get('/:idChildren/count', childrenController.countLevelsByChildren)
levelsRouter.get('/:idChildren', childrenController.indexLevelsByChildren)

export default levelsRouter;

