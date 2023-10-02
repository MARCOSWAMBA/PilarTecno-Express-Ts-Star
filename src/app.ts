import express from 'express';
import { router as pokemonsRouter } from './router/pokemonsRouter';
import { router as digimonsRouter } from './router/digimonsRouter';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/pokemons', pokemonsRouter);
app.use('/digimons', digimonsRouter);

app.listen(PORT, () => {
  console.log('Servidor express iniciado en', PORT);
});
