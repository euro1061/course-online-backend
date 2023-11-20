import { Router } from 'express';
import authenController from './authenController';
import { validateSchema } from '../../middlewares/validate-schema';
import { registerSchema } from './authenSchema';

const route = Router();
route.post(
    '/register',
    validateSchema([registerSchema]),
    authenController.onRegister
);

module.exports = route;