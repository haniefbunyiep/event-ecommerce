import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './api/router';
import bodyParser from 'body-parser';

const app: Express = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || 'Error';

  res.status(statusCode).send({
    error: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(PORT, async () => {
  try {
    console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
  } catch (error) {
    console.error('Error connecting ngrok:', error);
  }
});
