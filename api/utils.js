import fs from 'fs';
import path from 'path';

export function readMoviesData() {
  const moviesFilePath = path.join(process.cwd(), 'api', 'movies_data.json');
  try {
    const data = fs.readFileSync(moviesFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading the JSON file:', err);
    return [];
  }
}
