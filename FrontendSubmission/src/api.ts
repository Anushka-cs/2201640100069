// src/api.ts
import { Log } from './logger';

export async function shortenUrl(originalUrl: string) {
  try {
    const code = Math.random().toString(36).substring(2, 8);
    const short = `http://short.ly/${code}`;

    await Log('frontend', 'info', 'api', `Shortened URL: ${originalUrl} -> ${short}`);

    return { short };  // <-- must return this
  } catch (err: any) {
    await Log('frontend', 'error', 'api', `Failed to shorten URL: ${err.message}`);
    throw err;
  }
}
