import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { env } from '../../config/env';

const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));

export interface VersionInfo {
  name: string;
  version: string;
  environment: string;
  node: string;
}

export function getVersionInfo(): VersionInfo {
  return {
    name: pkg.name,
    version: pkg.version,
    environment: env.NODE_ENV,
    node: process.version,
  };
}