import { Router } from 'express';
import { getStarsController } from '../controller/getStarController';
import { getStarByIdController } from '../controller/getStarIdController';
import { createStarController } from '../controller/createStarController';

export const router = Router();

//basepath -- /stars

router.get('/', getStarsController);
router.get('/:id', getStarByIdController);
router.post('/', createStarController);
