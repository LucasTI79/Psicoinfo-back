import express from 'express';
import cors from 'cors';
import { routes } from './src/app/routes/index.js';
import { config } from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'url';

config({  
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env.production"
})

console.log('\x1b[31mMODE: \x1b[33m'+process.env.NODE_ENV.toUpperCase()+'\x1b[0m')

const app = express();

app.use(cors({
  origin: '*'
}))

// app.use((req, res, next) => {
//   req.header ={ 
//     ...req.header,

//   }
//   next();
// });

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) => res.send('Hello Wold!'));
app.use('/uploads', express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)),'uploads')));
app.use(routes)

// app.use('/upload', upload.single('files') ,(req,res) => {
//   console.log(req.body)
//   console.log(req.files);
//   res.send('upload feito com sucesso')
// })


export default app;