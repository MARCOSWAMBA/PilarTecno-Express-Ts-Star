import { Router } from 'express';
import { getDigimonsController } from '../controller/digimons/getDigimonsController';

export const router = Router();

//Basepath---> /digimons

router.get('/', getDigimonsController);
