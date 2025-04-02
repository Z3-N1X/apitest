import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.resolve('./data.json'); // Replace with your database setup

export default async function handler(req, res) {
  const { code } = req.query;

  if (!/^\d{4}$/.test(code)) {
    return res.status(400).json({ error: 'Invalid code format. Use a 4-digit code.' });
  }

  try {
    const data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));

    if (data[code]) {
      return res.status(200).json({ value: data[code] });
    } else {
      return res.status(404).json({ error: 'Code not found.' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
