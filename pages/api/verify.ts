import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
    const { org } = req.body;
    const response = await fetch(`http://localhost:3060/verifyDB/${org}`);
    const data = await response.json();

    //only db? should also check github 
    // console.log(org);
    // console.log(data);
    
    res.status(200).json(data);
});



export default handler;

