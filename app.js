import express from 'express';
import cors from 'cors';
import { routes } from './src/app/routes/index.js';
import { config } from 'dotenv';
config({  
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env.production"
})

console.log('\x1b[31mMODE: \x1b[33m'+process.env.NODE_ENV.toUpperCase()+'\x1b[0m')

const app = express();

app.use(cors({
  origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req,res) => res.send('Hello World!'))
app.use(routes)

export default app;