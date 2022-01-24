import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

const server: Express = express();

const PORT: number = Number(process.env.PORT) || 3000;

server.use(bodyParser.json());

server.get('/ping', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'pong' });
});

server.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

export default server;
