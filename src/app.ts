import express from 'express';
import { router as starsRouter } from './router/startRoutes';
import { logger } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/erroHandler';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('*', logger);

app.use('/stars', starsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Servidor express iniciado en', PORT);
});
