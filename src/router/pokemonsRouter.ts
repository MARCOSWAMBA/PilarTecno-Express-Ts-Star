import { Router } from 'express';
import { getPokemonsController } from '../controller/pokemons/getPokemonsController';
import { getPokemonsName } from '../controller/pokemons/getPokemonsNameController';
import { postPokemonsCreate } from '../controller/pokemons/postPokemonsCreateController';
import { validatePokemonBody } from '../middleware/validacionMiddleware';

export const router = Router();

router.get('/', getPokemonsController);

router.get('/:name', getPokemonsName);

router.post('/', validatePokemonBody, postPokemonsCreate);
