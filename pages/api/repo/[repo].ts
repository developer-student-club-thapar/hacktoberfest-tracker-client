import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
    const { org } = req.body;
    const response = await fetch(`http://localhost:3060/${org}`);
    const data = await response.json();
    console.log(data);
    
    res.status(200).json(data);
    }
);

export default handler;