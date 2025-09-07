import express from 'express';
import publicRoutes from './routes/public.js';
import cors from 'cors';

const App = express();

App.use(express.json());
App.use(cors());

App.use('/', publicRoutes);

App.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333,
}, () => {
  console.log('Server is running on port 3333');
});
