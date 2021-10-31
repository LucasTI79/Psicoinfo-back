import express from 'express';
import cors from 'cors';

process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

const app = express();

app.get('/', async (req,res) => res.send('Hello World!'))

export default app;