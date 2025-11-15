import express, { Request, Response } from 'express';
const app = express();
const port = 8000;

app.use(express.json());

//GET ЭНДПОИНТЫ 
app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello, world!" });
});

//POST ЭНДПОИНТЫ
app.post('/api/hi', (req: Request, res: Response) => {
  res.json({
    message: "hi",
    received: req.body
  });
});


app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log(`Эндпоинты:`);
  console.log(`GET  http://localhost:${port}/api/hello`);
  console.log(`POST http://localhost:${port}/api/hi`);
});