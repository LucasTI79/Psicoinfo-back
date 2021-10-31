import { default as server }from './app.js';

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || '127.0.0.1';

server.listen(PORT, () => console.log(`Server listening in http://${HOST}:${PORT}`))