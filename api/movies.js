import { readMoviesData } from './utils';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const movies = readMoviesData();
    res.status(200).json(movies);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
