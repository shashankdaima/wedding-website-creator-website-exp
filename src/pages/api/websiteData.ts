import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const publicDir = path.join(process.cwd(), 'public');
  const filePath = path.join(publicDir, 'site-state.json');

  // GET request handler
  if (req.method === 'GET') {
    try {
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'No website data found' });
      }

      const stateData = fs.readFileSync(filePath, 'utf-8');
      const state = JSON.parse(stateData);

      return res.status(200).json(state);
    } catch (error) {
      console.error('Error reading website data:', error);
      return res.status(500).json({ message: 'Failed to read website data' });
    }
  }

  // POST/PUT request handler
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const state = req.body;
      
      // Create public directory if it doesn't exist
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Write the state to file
      fs.writeFileSync(filePath, JSON.stringify(state, null, 2));

      return res.status(200).json({ 
        success: true,
        url: '/site-state.json'
      });
    } catch (error) {
      console.error('Error saving website data:', error);
      return res.status(500).json({ message: 'Failed to save website data' });
    }
  }

  // Handle other HTTP methods
  return res.status(405).json({ message: 'Method not allowed' });
}
