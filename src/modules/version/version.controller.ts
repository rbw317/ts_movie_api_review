import type { Request, Response } from 'express';
import { getVersionInfo } from './version.service';

export function getVersion(_req: Request, res: Response) {
  res.json(getVersionInfo());
}