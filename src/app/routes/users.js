import { Router } from 'express';
import UserController from '../controllers/UserController';
import multer from 'multer';
import uploadConfig from '../../config/uploads';
const upload = multer(uploadConfig);

const UsersRouter = Router();

UsersRouter.post('/reset', UserController.reset)
UsersRouter.post('/forgot', UserController.forgot)
UsersRouter.post('/auth', UserController.auth)
UsersRouter.get('/', UserController.index)
UsersRouter.post('/', upload.single('files'), UserController.store)

export default UsersRouter;