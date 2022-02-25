import 'reflect-metadata';
import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import createConnection from '../database';

createConnection();

const server: Express = express();

server.use(bodyParser.json());

server.get('/ping', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'pong' });
});

export default server;
