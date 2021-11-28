import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','..','uploads'),
        filename: (request, file, cb) => {
            const novoNomeArquivo =
            crypto
            .randomBytes(8)
            .toString('hex');
            const fileName = `${Date.now()}-${novoNomeArquivo}`;
            request.fileName = fileName;
            cb(null,`${fileName}.${file.originalname.split('.')[1]}`);
        }
    })
};
