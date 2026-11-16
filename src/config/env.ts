import 'dotenv/config'; // loads .env into process.env

const port = Number(process.env.PORT ?? 3000);
if (Number.isNaN(port)) {
  throw new Error(`Invalid PORT: ${process.env.PORT}`);
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: port,
};