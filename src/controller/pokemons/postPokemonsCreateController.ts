import { Response, Request } from 'express';
import pokemonData from '../../data/pokemon.json';

export async function postPokemonsCreate(req: Request, res: Response) {
  const { id, name, type, base_experience } = req.body;
  if (!id || !name || !type || !base_experience) {
    res.status(400).json({
      error: 'BAD_REQUEST',
      message: `There are missing params for this request`,
    });
  }
  res.status(200).json({
    status: 'OK',
  });
}
