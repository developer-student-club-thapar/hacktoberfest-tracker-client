import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
    const { org } = req.body.username;
    const response = await fetch(`https://localhost:3060/${org}`);
    const data = await response.json();
    console.log(data);
    
    res.status(200).json(data);
});


export default handler;

