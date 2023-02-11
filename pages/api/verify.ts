import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
    const { org } = req.body;
    console.log(org);
    const response = await fetch(`http://localhost:3060/verifyDB/${org}`);
    //only db? should also check github 
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
});



export default handler;

