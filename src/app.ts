import express from 'express';
import { router as pokemonsRouter } from './router/pokemonsRouter';
import { router as digimonsRouter } from './router/digimonsRouter';
import { logger } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/erroHandler';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('*', logger);

app.use('/pokemons', pokemonsRouter);
app.use('/digimons', digimonsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Servidor express iniciado en', PORT);
});
