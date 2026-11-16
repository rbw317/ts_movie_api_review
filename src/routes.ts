import { Router } from 'express';
import { versionRoutes } from './modules/version/version.routes';

export const routes = Router();

routes.use('/version', versionRoutes);
