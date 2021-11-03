import express from 'express';
import cors from 'cors';
import { routes } from './src/app/routes/index.js';
// import bodyParser from 'body-parser';

process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

const app = express();

app.use(cors({
  origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req,res) => res.send('Hello World!'))
app.use(routes)

export default app;