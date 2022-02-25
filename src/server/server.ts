import server from './app';

const PORT = Number(process.env.PORT) | 8080;

server.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});