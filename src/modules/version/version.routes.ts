import { Router } from 'express';
import { getVersion } from './version.controller';

export const versionRoutes = Router();

versionRoutes.get('/', getVersion);